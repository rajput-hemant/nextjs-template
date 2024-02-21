import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    /* -----------------------------------------------------------------------------------------------
     * Node.js Environment
     * -----------------------------------------------------------------------------------------------*/

    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    /* -----------------------------------------------------------------------------------------------
     * NextAuth.js
     * -----------------------------------------------------------------------------------------------*/

    // NEXTAUTH_SECRET:
    //   process.env.NODE_ENV === "production"
    //     ? z.string()
    //     : z.string().optional(),
    // NEXTAUTH_URL: z.preprocess(
    //   // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    //   // Since NextAuth.js automatically uses the VERCEL_URL if present.
    //   (str) => process.env.VERCEL_URL ?? str,
    //   // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    //   process.env.VERCEL ? z.string() : z.string().url()
    // ),

    /* -----------------------------------------------------------------------------------------------
     * Google OAuth
     * -----------------------------------------------------------------------------------------------*/

    // GOOGLE_CLIENT_ID: z
    //   .string()
    //   .min(1, { message: "Google Client ID is invalid or missing" }),
    // GOOGLE_CLIENT_SECRET: z
    //   .string()
    //   .min(1, { message: "Google Client Secret is invalid or missing" }),

    /* -----------------------------------------------------------------------------------------------
     * Github OAuth
     * -----------------------------------------------------------------------------------------------*/

    // GITHUB_CLIENT_ID: z
    //   .string()
    //   .min(1, { message: "Github Client ID is invalid or missing" }),
    // GITHUB_CLIENT_SECRET: z
    //   .string()
    //   .min(1, { message: "Github Client Secret is invalid or missing" }),

    /* -----------------------------------------------------------------------------------------------
     * Discord OAuth
     * -----------------------------------------------------------------------------------------------*/

    // DISCORD_CLIENT_ID: z
    //   .string()
    //   .min(1, { message: "Discord Client ID is invalid or missing" }),
    // DISCORD_CLIENT_SECRET: z
    //   .string()
    //   .min(1, { message: "Discord Client Secret is invalid or missing" }),

    /* -----------------------------------------------------------------------------------------------
     * Database URL
     * -----------------------------------------------------------------------------------------------*/

    // DATABASE_URL: z
    //   .string()
    //   .min(1, { message: "Database URL is invalid or missing" }),

    /* -----------------------------------------------------------------------------------------------
     * Upstash Rate Limiting (Redis)
     * -----------------------------------------------------------------------------------------------*/

    // UPSTASH_REDIS_REST_URL: z.string().url().optional(),
    // UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
    // ENABLE_RATE_LIMITING: z.coerce.boolean().default(false),
    // RATE_LIMITING_REQUESTS_PER_SECOND: z.coerce.number().default(50),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   * For Next.js >= 13.4.4, you only need to destructure client variables (Only valid for `experimental__runtimeEnv`)
   */
  experimental__runtimeEnv: {
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },

  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
