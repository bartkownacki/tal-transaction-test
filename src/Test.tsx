import {useDynamicContext} from "@dynamic-labs/sdk-react-core";
import {JsonRpcProvider, parseEther, parseUnits} from "ethers";

const Test = () => {
    const {primaryWallet} = useDynamicContext();

    const handleTransaction = async () => {
        if (!primaryWallet) {
            return;
        }

        const address = '0x6263Fa6FA352b4dDdBC1b72c61947345B2371696';
        const amount = '0.00001';

        const provider = await primaryWallet.connector?.ethers?.getRpcProvider() as JsonRpcProvider;
        const nonce = await provider.getTransactionCount(primaryWallet.address);

        const signer = await primaryWallet.connector?.ethers?.getSigner();

        const tx = {
            nonce,
            to: address,
            value: parseEther(amount),
            gasLimit: 21000, // Example gas limit
            gasPrice: parseUnits("10", "gwei"), // Example gas price
        };

        const signedTx = await signer?.sendTransaction(tx)
        console.log(signedTx);
    };

    const handleSignMessage = async () => {
        if (!primaryWallet) {
            return;
        }

        const signer = await primaryWallet.connector?.ethers?.getSigner();

        const message = "Hello world!";
        const signature = await signer?.signMessage(message);
        console.log(signature);
    }

    return (
        <div>
            <button onClick={handleTransaction}>Send transaction</button>
            <button onClick={handleSignMessage}>Sign message</button>
        </div>
    )
}

 export default Test;