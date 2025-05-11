import { http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { liskSepolia } from "viem/chains";
import { pharosChain, optimismSepolia } from "./data/chain-data";
import { chain_id } from "@/constants/addresses";

export const config = getDefaultConfig({
  appName: "MyDApp",
  projectId: "YOUR_PROJECT_ID",
  chains: [liskSepolia, chain_id === 50002 ? pharosChain : optimismSepolia],
  transports: {
    [chain_id === 50002 ? pharosChain.id : optimismSepolia.id]: http(),
  },
});
