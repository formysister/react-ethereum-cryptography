import React, { useState } from "react"
import { useNetwork } from "wagmi"
import { getWalletClient } from "@wagmi/core"
import { CodeBlock, dracula } from "react-code-blocks"
import { ethers } from "ethers"

import "../styles/index.css"
import { code_source, text } from "../data"

const Landing = () => {
    const { chain } = useNetwork()

    const [signData, setSignData] = useState({
        metamaskMessage: text.hello_world,
        wagmiMessage: text.hello_world,
        metamaskSignedMessageOutput: '',
        wagmiSignedMessageOutput: '',
        ethersMessageInput: '',
        ethersSignedMessageInput: '',
        solidityMessageinput: '',
        soliditySignedMessageInput: '',
        ethersSigner: '',
        soliditySigner: ''
    })

    const onMetamaskMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setSignData({ ...signData, metamaskMessage: e.target.value })
    const onWagmiMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setSignData({ ...signData, wagmiMessage: e.target.value })
    const onEthersSignedMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => setSignData({ ...signData, ethersSignedMessageInput: e.target.value })
    const onEthersMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => setSignData({ ...signData, ethersMessageInput: e.target.value })

    const signMessageWithMetamask = async () => {
        try {
            if (!!window.ethereum) {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                const account = accounts[0];

                const signature = await window.ethereum.request({
                    method: "personal_sign",
                    params: [signData.metamaskMessage, account],
                });

                setSignData({ ...signData, metamaskSignedMessageOutput: signature })
            }
            else {
                console.error("Metamask is not installed")
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const signMessageWithWagmi = async () => {
        try {
            const walletClient: any = await getWalletClient({ chainId: chain?.id })
            const signature = await walletClient?.signMessage({ message: signData.wagmiMessage })
            setSignData({ ...signData, wagmiSignedMessageOutput: signature })
        }
        catch (error) {
            console.error(error)
        }
    }

    const verifyMessageEthers = async () => {
        try {
            const signer = await ethers.verifyMessage(signData.ethersMessageInput, signData.ethersSignedMessageInput)
            setSignData({ ...signData, ethersSigner: signer })
        }
        catch(error) {
            console.error(error)
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div className="flex flex-row space-around" style={{ width: '80%', maxWidth: '90%' }}>
                <div className='flex flex-col'>
                    <h2>Sign Message with Metamask</h2>
                    <div className='flex' style={{ textAlign: 'left' }}>
                        <CodeBlock text={code_source.sign_metamask} language="javascript" theme={dracula} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2>Try it yourself</h2>
                    <div className="flex flex-col items-center justify-center" style={{ height: '100%' }}>
                        <div className="flex">
                            <textarea className="flex text-area" value={signData.metamaskMessage} onChange={onMetamaskMessageChange} />
                        </div>
                        <div className="flex">
                            <button className="flex btn" onClick={signMessageWithMetamask}>Sign Message</button>
                        </div>
                        <div className="flex">
                            <textarea className="flex text-area" value={signData.metamaskSignedMessageOutput} placeholder="Signed message hash" readOnly />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-around" style={{ width: '80%', maxWidth: '90%' }}>
                <div className='flex flex-col'>
                    <h2>Sign Message with Wagmi</h2>
                    <div className='flex' style={{ textAlign: 'left' }}>
                        <CodeBlock text={code_source.sign_wagmi} language="javascript" theme={dracula} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2>Try it yourself</h2>
                    <div className="flex flex-col items-center justify-center" style={{ height: '100%' }}>
                        <div className="flex">
                            <textarea className="flex text-area" value={signData.wagmiMessage} onChange={onWagmiMessageChange} />
                        </div>
                        <div className="flex">
                            <button className="flex btn" onClick={signMessageWithWagmi}>Sign Message</button>
                        </div>
                        <div className="flex">
                            <textarea className="flex text-area" value={signData.wagmiSignedMessageOutput} placeholder="Signed message hash" readOnly />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-around" style={{ width: '80%', maxWidth: '90%' }}>
                <div className='flex flex-col'>
                    <h2>Verify message with ethers.js</h2>
                    <div className='flex' style={{ textAlign: 'left' }}>
                        <CodeBlock text={code_source.sign_wagmi} language="javascript" theme={dracula} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2>Try it yourself</h2>
                    <div className="flex flex-col items-center justify-between" style={{ height: '100%' }}>
                        <div className="flex">
                            <input placeholder="Message" className="flex input-field" value={signData.ethersMessageInput} onChange={onEthersMessageChange} />
                        </div>
                        <div className="flex">
                            <input placeholder="Signature" className="flex input-field" value={signData.ethersSignedMessageInput} onChange={onEthersSignedMessageChange} />
                        </div>
                        <div className="flex">
                            <button className="flex btn" onClick={verifyMessageEthers}>Verify Message</button>
                        </div>
                        <div className="flex">
                            <h6>Signer: <code>{signData.ethersSigner}</code></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing