"use client";

import { useEffect, ReactNode } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

// Mendefinisikan tipe props agar TypeScript tidak protes
interface FarcasterProviderProps {
  children: ReactNode;
}

export default function FarcasterProvider({ children }: FarcasterProviderProps) {
  useEffect(() => {
    const initSdk = async () => {
      try {
        // Memanggil ready() agar splash screen Farcaster hilang
        await sdk.actions.ready();
        console.log("Farcaster SDK Ready!");
      } catch (error) {
        console.error("Farcaster SDK Init Error:", error);
      }
    };

    initSdk();
  }, []);

  // Kita langsung render children tanpa menunggu loading
  // agar UI tetap muncul meskipun SDK belum siap sepenuhnya
  return <>{children}</>;
}