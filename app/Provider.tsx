"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
import { getClerkUsers } from "@/lib/actions/user.actions";

export function Provider({ children }: { children: ReactNode }) {
  return (
    <LiveblocksProvider 
      authEndpoint="/api/liveblocks-auth"
      resolveUsers = {async(userIds)=>{
        const users = await getClerkUsers(userIds);
        return users;
      }}
    >
        <ClientSideSuspense fallback={<Loader></Loader>}>
          {children}
        </ClientSideSuspense>
    </LiveblocksProvider>
  );
}