import { Address } from "viem";

export const chain_id: number = 4202;

let temp_mockWeth;
let temp_mockWbtc;
let temp_mockUsdc;
let temp_mockUsdt;
let temp_idrxTestnet;
let temp_mockPepe;
let temp_mockBnvda;
let temp_mockSaapl;
let temp_mockPaxg;
let temp_priceFeed;
let temp_factory;
let temp_lendingPool;
let temp_lendingPoolSequencer;
let temp_position;

if (chain_id === 4202) {
  temp_mockWeth = "0x14b69D0cE99E8B32962b98F59368CF68DCF4e600" as Address;
  temp_mockWbtc = "0x74CC1f4D08663dad7E29E1718c21553BF644844B" as Address;
  temp_mockUsdc = "0x6E87c01682E547Bf69c73B5F0A1b4aAAE91A1EE1" as Address;
  temp_mockUsdt = "0x4c06cFCbfAc822251E5003eF1A02C469d7Af2e01" as Address;
  temp_idrxTestnet = "0xD63029C1a3dA68b51c67c6D1DeC3DEe50D681661" as Address;
  temp_mockPepe = "0xf4A0676771A422fCb6EfCdFBB9799fF2164C4bE9" as Address;
  temp_mockBnvda = "0x880416Aabcb16A7a29356a8ac23e846A27b9C561" as Address;
  temp_mockSaapl = "0xB6f3324A7E20d98C04D6D65d2A4F1fa0E8BBcCfB" as Address;
  temp_mockPaxg = "0xE2e80F81589C80Cb1d20A7846A350644281E0177" as Address;
  temp_priceFeed = "0x0D25DA20e2579eA613E9160C666CA4C4f1C62898" as Address;
  temp_factory = "0x4CA9964bA32016F6Ba043Bfefc17BFf45E73469e" as Address;
  temp_lendingPool = "0xbB453271D443c8169Ee47D65BDBa7082C0b7767D" as Address;
  temp_lendingPoolSequencer =
    "0x084932f82db43cE34CDc9AB9815DB04f414f4f5F" as Address;
  temp_position = "0x528212Fd0ccFB0C93F0e7b1F906aeecaB6FADE99" as Address;
} else {
/****************************************************************************** */
  temp_mockWeth = "0x689c1eF623a32D7d11296265013f42C7973Fda86" as Address;
  temp_mockWbtc = "0x94ce8C98D12389263C589bE2AA5B98fF391EEb56" as Address;
  temp_mockUsdc = "0x8d0482D342168823fed8739dDaC881F5F1aD5a5C" as Address;
  temp_mockUsdt = "0x2d2D27ca25ff36C60c53a7112fE8d36FD3b41566" as Address;
  temp_mockPepe = "0x8f220895ae229d5B39c8B86BDaae73a4dD513CB2" as Address;
  temp_mockBnvda = "0xDb4A78C3FBc7BA4b71273d907e1a7Fc4EC9dE5d5" as Address;
  temp_mockSaapl = "0x3c00a25678aE8e23ae6405F88857e38dE89c886D" as Address;
  temp_mockPaxg = "0x1cc5007ae971F6C5F99506F94c52c494dfC7b314" as Address;
  temp_priceFeed = "0xf8BaFD421BF510a492059F98e1a61F22793eb540" as Address;
  temp_factory = "0x9108c9d911846e925b24Bc9a1d8Abbf965212957" as Address;
  temp_lendingPool = "0x8370aFfe9a1c3A258A4E22B71A0c1F4D9b5715Eb" as Address;
  temp_lendingPoolSequencer =
    "0x2851D80C5AF11E4BFcA0522CCFa7d390acDe9Bc0" as Address;
  temp_position = "0x0521A7e762Fe11705B2ae853Bd93Ad5341e60Ce9" as Address;
}

export const mockWeth = temp_mockWeth;
export const mockWbtc = temp_mockWbtc;
export const mockUsdc = temp_mockUsdc;
export const mockUsdt = temp_mockUsdt;
export const idrxTestnet = temp_idrxTestnet;
export const mockPepe = temp_mockPepe;
export const mockBnvda = temp_mockBnvda;
export const mockSaapl = temp_mockSaapl;
export const mockPaxg = temp_mockPaxg;
export const priceFeed = temp_priceFeed;
export const factory = temp_factory;
export const lendingPool = temp_lendingPool;
export const lendingPoolSequencer = temp_lendingPoolSequencer;
export const position = temp_position;

export const solverAddress =
  "0x44C444f33E25b382AD64C88f40E286966CeC0535" as Address;
export const hxAddress = "https://pharosscan.xyz/tx/" as Address;
