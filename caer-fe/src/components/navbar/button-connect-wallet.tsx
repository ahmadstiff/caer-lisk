"use client";
import { ConnectButton } from "@xellar/kit";
import { Chain } from 'viem';
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const ButtonConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        isConnected,
        openConnectModal,
        openProfileModal,
        openChainModal,
        chain,
      }) => {
        const address = account?.address;

        return (
          <div className="flex items-center gap-4">
            <div className="relative group">
              <BackgroundGradient className="rounded-3xl p-[2px]">
                <button
                  onClick={isConnected ? openChainModal : openConnectModal}
                  className="flex items-center justify-center space-x-1 px-3 py-1.5 rounded-3xl bg-white text-[#07094d] hover:opacity-90 font-medium transition-all"
                >
                  {}
                  <img
                    src="/lisk-logo.png"
                    alt="Logo"
                    className="w-7 h-7 rounded-full"
                    style={{ objectPosition: "center" }}
                  />
                  <span>{chain?.name}</span>
                  <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                </button>
              </BackgroundGradient>
            </div>

            <BackgroundGradient className="rounded-3xl p-[2px]">
              <button
                onClick={isConnected ? openProfileModal : openConnectModal}
                className="flex items-center justify-center space-x-1 px-3 py-2 rounded-3xl bg-white text-[#07094d] hover:opacity-90 font-medium transition-all"
              >
                {isConnected
                  ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
                  : "Connect Wallet"}
              </button>
            </BackgroundGradient>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ButtonConnectWallet;
