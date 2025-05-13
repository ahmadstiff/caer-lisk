"use client";

import { useState } from "react";
import { XellarKitProvider, darkTheme } from "@xellar/kit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";
import Providers from "@/app/Providers";
import { ThemeProvider } from "@/components/theme-provider"

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <XellarKitProvider theme={darkTheme} showConfirmationModal={true}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
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
          </ThemeProvider>
        </XellarKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
