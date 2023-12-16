import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import { goerli } from "@wagmi/chains"
import { infuraProvider } from "wagmi/providers/infura"

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
        goerli,
    ],
    [
        infuraProvider({ apiKey: "7056ce2ab33c415984a6fd637795b407" }),
    ]
);

const { connectors } = getDefaultWallets({
    appName: "ethereum-cryptography",
    projectId: "306d52092ec4c60a7c43fa56c12fcab0",
    chains,
});

const config = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

const wagmiConig = { config, chains }

export default wagmiConig