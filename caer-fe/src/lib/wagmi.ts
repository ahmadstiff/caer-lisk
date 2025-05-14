import { Config, http } from "wagmi";
import { liskChain, optimismSepolia } from "./data/chain-data";
import { chain_id } from "@/constants/addresses";
import { defaultConfig } from "@xellar/kit";

const walletConnectProjectId = process.env
  .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string;
const xellarAppId = process.env.NEXT_PUBLIC_XELLAR_APP_ID as string;

export const config = defaultConfig({
  appName: "Caer-Lisk",
  walletConnectProjectId,
  xellarAppId,
  xellarEnv: "sandbox",
  chains: [chain_id === 4202 ? liskChain : optimismSepolia],
  transports: {
    [chain_id === 4202 ? liskChain.id : optimismSepolia.id]: http(),
  },
}) as Config;
