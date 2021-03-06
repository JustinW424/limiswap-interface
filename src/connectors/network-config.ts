import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const networkId = 42;
export const defaultRPCURL = process.env.NEXT_PUBLIC_RPC_URL || "";

const providerOptions = {
  injected: {
    package: null,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        42: defaultRPCURL,
      },
      pollingInterval: 15000,
      qrcode: true,
      supportedChainIds: [42]
    },
  },
};

const getWeb3Modal = () => {
  if (typeof window !== "undefined") {
    return new Web3Modal({
      cacheProvider: true,
      providerOptions,
      theme: "dark",
    });
  } else {
    return undefined;
  }
};

export const web3Modal = getWeb3Modal();

type TNetWorkData = {
  chainId: string;
  chainName: string;
  rpcUrls: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrls: string[];
};

export const getNetworkData = (netId: number): TNetWorkData | undefined => {
  switch (netId) {
    case 42: {
      return {
        chainId: "0x2A",
        chainName: "Kovan",
        rpcUrls: [defaultRPCURL],
        nativeCurrency: {
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
        },
        blockExplorerUrls: ["https://kovan.etherscan.io"],
      };
    }
    default:
      return undefined;
  }
};