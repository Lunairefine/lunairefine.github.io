"use client"
import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

export default function FarcasterProvider() {
  useEffect(() => {
    const initSdk = async () => {
      try {
        await sdk.actions.ready(); 
        console.log("Farcaster SDK Ready");
      } catch (error) {
        console.error("Farcaster SDK Error:", error);
      }
    };

    initSdk();
  }, []);

  return null;
}