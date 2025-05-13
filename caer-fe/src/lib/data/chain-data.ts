import { defineChain } from "viem";

export const pharosChain = defineChain({
  id: 50002,
  name: "Pharos Devnet",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://devnet.dplabs-internal.com/"] },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://pharosscan.xyz/",
    },
  },
  testnet: true,
  iconBackground: "#ffff",
  iconUrl: "/pharos-logo.jpg"
});

export const optimismSepolia = defineChain({
  id: 11155420,
  name: "Pharos",
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
  iconUrl: "/pharos-logo.jpg"
});

