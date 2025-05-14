"use client";
import { ConnectButton } from "@xellar/kit";
import { BackgroundGradient } from "../ui/background-gradient";
import { ChevronDown } from "lucide-react";

const ButtonConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openConnectModal,
        openProfileModal,
        openChainModal,
      }) => {
        const isConnected = !!account && !!chain;
        const address = account?.address;

        return (
          <div className="flex items-center gap-4">
            {isConnected ? (
              <>
                {/* Chain Button */}
                <div className="relative group">
                  <BackgroundGradient className="rounded-3xl p-[2px]">
                    <button
                      onClick={openChainModal}
                      className="flex items-center justify-center space-x-2 px-3 py-1.5 rounded-3xl bg-white text-[#07094d] hover:opacity-90 font-medium transition-all"
                    >
                      <img
                        src="/lisk-logo.png"
                        alt="Logo"
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{chain?.name}</span>
                      <ChevronDown className="w-4 h-4 opacity-70" />
                    </button>
                  </BackgroundGradient>
                </div>

                {/* Address/Profile Button */}
                <BackgroundGradient className="rounded-3xl p-[2px]">
                  <button
                    onClick={openProfileModal}
                    className="flex items-center justify-center space-x-1 px-3 py-1.5 rounded-3xl bg-white text-[#07094d] hover:opacity-90 font-medium transition-all"
                  >
                    {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
                  </button>
                </BackgroundGradient>
              </>
            ) : (
              // Single connect wallet button when not connected
              <BackgroundGradient className="rounded-3xl p-[2px]">
                <button
                  onClick={openConnectModal}
                  className="flex items-center justify-center px-4 py-1.5 rounded-3xl bg-white text-[#07094d] hover:opacity-90 font-medium transition-all"
                >
                  Connect Wallet
                </button>
              </BackgroundGradient>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ButtonConnectWallet;
