"use client";

import { useState } from "react";
import { XellarKitProvider, lightTheme } from "@xellar/kit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";
import { pharosChain } from "@/lib/data/chain-data";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";
import Providers from "@/app/Providers";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <XellarKitProvider theme={lightTheme}
        showConfirmationModal={true}
        >
          <div className="">
            <div className="relative z-99">
              <Navbar />
            </div>
            <div className="mt-5 relative z-10">
              <Providers>{children}</Providers>
            </div>
            <Toaster />
          </div>
        </XellarKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 