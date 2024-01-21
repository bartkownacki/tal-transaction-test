import './App.css'
import {DynamicContextProvider, DynamicWidget} from "@dynamic-labs/sdk-react-core";
import {EthereumWalletConnectors} from "@dynamic-labs/ethereum";
import {EthersExtension} from "@dynamic-labs/ethers-v6";
import Test from "./Test.tsx";

function App() {


  return (
    <>
        <DynamicContextProvider settings={{
            environmentId: 'c4fb4570-3f5e-428a-aeae-824d52040046',
            walletConnectors: [EthereumWalletConnectors],
            walletConnectorExtensions: [EthersExtension],
            evmNetworks: [
                {
                    blockExplorerUrls: ['https://testnet.bscscan.com/'],
                    chainId: 97,
                    chainName: 'BSC Testnet',
                    iconUrls: ['https://app.dynamic.xyz/assets/networks/bnb.svg'],
                    name: 'BSCTestnet',
                    nativeCurrency: {
                        decimals: 18,
                        name: 'Test BNB',
                        symbol: 'tBNB',
                    },
                    networkId: 97,

                    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
                    vanityName: 'BSC Testnet',
                },
                {
                    blockExplorerUrls: ['https://etherscan.io/'],
                    chainId: 1,
                    chainName: 'Ethereum Mainnet',
                    iconUrls: ['https://app.dynamic.xyz/assets/networks/eth.svg'],
                    name: 'Ethereum',
                    nativeCurrency: {
                        decimals: 18,
                        name: 'Ether',
                        symbol: 'ETH',
                    },
                    networkId: 1,

                    rpcUrls: [
                        'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                    ],
                    vanityName: 'ETH Mainnet',
                },
            ]
        }}>
            <DynamicWidget />
             <Test />
        </DynamicContextProvider>
    </>
  )
}

export default App
