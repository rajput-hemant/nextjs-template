import "server-only";

import { cache } from "react";
import { headers } from "next/headers";

import { createHydrationHelpers } from "@trpc/react-query/rsc";

import type { AppRouter } from "./root";

import { createTRPCContext } from ".";
import { createQueryClient } from "./query-client";
import { createCaller } from "./root";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const heads = new Headers(headers());
  heads.set("x-trpc-source", "rsc");

  return createTRPCContext({
    headers: heads,
  });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient,
);
