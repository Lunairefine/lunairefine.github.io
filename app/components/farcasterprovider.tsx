"use client"
import { useEffect, ReactNode } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

interface Props {
  children: ReactNode;
}

export default function FarcasterProvider({ children }: Props) {

  useEffect(() => {
    let isMounted = true;

    const initSdk = async () => {
      try {
        await sdk.actions.ready();
        if (!isMounted) return;
        console.log("Farcaster SDK Ready!");
      } catch (error) {
        console.error("Farcaster SDK Init Error:", error);
      }
    };

    initSdk();

    return () => {
      isMounted = false;
    };
  }, []);

  return <>{children}</>;
}
