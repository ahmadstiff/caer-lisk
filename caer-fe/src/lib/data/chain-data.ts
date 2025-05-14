import { defineChain } from "viem";

export const liskChain = defineChain({
  id: 4202,
  name: "Lisk Sepolia",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.sepolia-api.lisk.com/"] },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com/",
    },
  },
  testnet: true,
  iconBackground: "#ffff",
  iconUrl: "/lisk-logo.png",
});

export const optimismSepolia = defineChain({
  id: 11155420,
  name: "Lisk",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://sepolia.optimism.io/"] },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com/",
    },
  },
  testnet: true,
  iconBackground: "#ffff",
  iconUrl: "/lisk-logo.png",
});
