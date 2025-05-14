import { createPublicClient } from "viem";
import { http } from "wagmi";
import { liskChain } from "./data/chain-data";
import { arbitrumSepolia, optimismSepolia } from "viem/chains";
import { chain_id } from "../constants/addresses";
export const ArbPublicClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
});

export const publicClient = createPublicClient({
  chain: chain_id === 	4202 ? liskChain : optimismSepolia,
  transport: http(),
});
