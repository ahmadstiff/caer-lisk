import { Config, http } from "wagmi";
import { liskChain, optimismSepolia } from "./data/chain-data";
import { chain_id } from "@/constants/addresses";
import { defaultConfig } from "@xellar/kit";

const walletConnectProjectId = "0ae29482f8325d6cb88bf255b4339ab8";
const xellarAppId = "ea081076-c9cb-47b3-944c-ad4f37638fe9";

export const config = defaultConfig({
  appName: "Caer-Lisk",
  walletConnectProjectId,
  xellarAppId,
  xellarEnv: "sandbox",
  chains: [ chain_id === 50002 ? liskChain : optimismSepolia],
  transports: {
    [chain_id === 50002 ? liskChain.id : optimismSepolia.id]: http(),
  },
}) as Config;


