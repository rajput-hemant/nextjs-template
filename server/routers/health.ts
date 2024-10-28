import { publicProcedure } from "~/server";

export const healthRouter = publicProcedure.query(() => "🚀 Hello from tRPC!");
