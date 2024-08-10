import { publicProcedure } from "~/lib/trpc";

export const healthRouter = publicProcedure.query(() => "🚀 Hello from tRPC!");
