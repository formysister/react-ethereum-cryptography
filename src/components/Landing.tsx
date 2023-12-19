import React, { useState } from "react"
import { useNetwork } from "wagmi"
import { getWalletClient } from "@wagmi/core"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { CodeBlock, dracula } from "react-code-blocks"
import { ethers } from "ethers"

import 'react-tabs/style/react-tabs.css';
import "../styles/index.css"
import { code_source, text, abi, constant } from "../data"

const Landing = () => {
    const { chain } = useNetwork()

    const [signData, setSignData] = useState({
        metamaskMessage: text.hello_world,
        wagmiMessage: text.hello_world,
        metamaskMessageHash: '',
        wagmiMessageHash: '',
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

    const onSoliditySignedMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => setSignData({ ...signData, soliditySignedMessageInput: e.target.value })
    const onSolidityMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => setSignData({ ...signData, solidityMessageinput: e.target.value })

    const signMessageWithMetamask = async () => {
        try {
            if (!!window.ethereum) {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                const account = accounts[0];

                const signature = await window.ethereum.request({
                    method: "personal_sign",
                    params: [signData.metamaskMessage, account],
                });

                setSignData({ ...signData, metamaskSignedMessageOutput: signature, metamaskMessageHash: '' })
            }
            else {
                console.error("Metamask is not installed")
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    const signMessageHashWithMetamask = async () => {
        try {
            if (!!window.ethereum) {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                const account = accounts[0];

                const messageHash = ethers.keccak256(ethers.toUtf8Bytes(signData.metamaskMessage))

                const signature = await window.ethereum.request({
                    method: "personal_sign",
                    params: [messageHash, account],
                });

                setSignData({ ...signData, metamaskSignedMessageOutput: signature, metamaskMessageHash: messageHash })
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

            const signature = await walletClient?.signMessage({
                message: signData.wagmiMessage
            })

            setSignData({ ...signData, wagmiSignedMessageOutput: signature, wagmiMessageHash: '' })
        }
        catch (error) {
            console.error(error)
        }
    }

    const signMessageHashWithWagmi = async () => {
        try {
            const walletClient: any = await getWalletClient({ chainId: chain?.id })

            const messageHash = ethers.keccak256(ethers.toUtf8Bytes(signData.wagmiMessage))

            const signature = await walletClient?.signMessage({
                message: {
                    raw: messageHash
                }
            })

            setSignData({ ...signData, wagmiSignedMessageOutput: signature, wagmiMessageHash: messageHash })
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
        catch (error) {
            console.error(error)
        }
    }

    const verifyMessageHashSolidity = async () => {
        try {
            if (!!window.ethereum) {
                const provider = new ethers.BrowserProvider(window.ethereum)
                const contract = new ethers.Contract(constant.address.message_verifier, abi.message_verifier, provider)
                const signer = await contract.verifyMessage(signData.solidityMessageinput, signData.soliditySignedMessageInput)

                setSignData({ ...signData, soliditySigner: signer })
            }
            else {
                console.error("Metamask is not installed")
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div id="landing-section-1" className="flex flex-row space-around landing-section" style={{ width: '80%', maxWidth: '90%' }}>
                <div className='flex flex-col'>
                    <h2>Sign mssage with Metamask</h2>
                    <div className='flex justify-center' style={{ textAlign: 'left' }}>
                        <Tabs>
                            <TabList>
                                <Tab>
                                    Sign Message
                                </Tab>
                                <Tab>
                                    Sign Message Hash
                                </Tab>
                            </TabList>
                            <TabPanel>
                                <CodeBlock text={code_source.sign_metamask} language="javascript" theme={dracula} />
                            </TabPanel>
                            <TabPanel>
                                <CodeBlock text={code_source.sign_hash_metamask} language="javascript" theme={dracula} />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2>Try it yourself</h2>
                    <div className="flex flex-col items-center justify-center sandbox" style={{ height: '100%' }}>
                        <div className="flex">
                            <textarea className="flex text-area" value={signData.metamaskMessage} onChange={onMetamaskMessageChange} />
                        </div>
                        <div className="flex">
                            <button className="flex btn" onClick={signMessageWithMetamask}>Sign Message</button>
                            <button className="flex btn" onClick={signMessageHashWithMetamask}>Sign Message Hash</button>
                        </div>
                        <div className="flex" style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <input readOnly placeholder="Message hash" className="flex input-field" value={signData.metamaskMessageHash} />
                        </div>
                        <div className="flex">
                            <textarea className="flex text-area" value={signData.metamaskSignedMessageOutput} placeholder="Signed message hash" readOnly />
                        </div>
                    </div>
                </div>
            </div>
            <div id="landing-section-2" className="flex flex-row space-around landing-section" style={{ width: '80%', maxWidth: '90%' }}>
                <div className='flex flex-col'>
                    <h2>Sign message with Wagmi</h2>
                    <div className='flex justify-center' style={{ textAlign: 'left' }}>
                        <Tabs>
                            <TabList>
                                <Tab>
                                    Sign Message
                                </Tab>
                                <Tab>
                                    Sign Message Hash
                                </Tab>
                            </TabList>
                            <TabPanel>
                                <CodeBlock text={code_source.sign_wagmi} language="javascript" theme={dracula} />
                            </TabPanel>
                            <TabPanel>
                                <CodeBlock text={code_source.sign_hash_wagmi} language="javascript" theme={dracula} />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2>Try it yourself</h2>
                    <div className="flex flex-col items-center justify-center sandbox" style={{ height: '100%' }}>
                        <div className="flex">
                            <textarea className="flex text-area" value={signData.wagmiMessage} onChange={onWagmiMessageChange} />
                        </div>
                        <div className="flex">
                            <button className="flex btn" onClick={signMessageWithWagmi}>Sign Message</button>
                            <button className="flex btn" onClick={signMessageHashWithWagmi}>Sign Message Hash</button>
                        </div>
                        <div className="flex" style={{ marginTop: '10px', marginBottom: '10px' }}>
                            <input readOnly placeholder="Message hash" className="flex input-field" value={signData.wagmiMessageHash} />
                        </div>
                        <div className="flex">
                            <textarea className="flex text-area" value={signData.wagmiSignedMessageOutput} placeholder="Signed message hash" readOnly />
                        </div>
                    </div>
                </div>
            </div>
            <div id="landing-section-3" className="flex flex-row space-around landing-section" style={{ width: '80%', maxWidth: '90%' }}>
                <div className='flex flex-col'>
                    <h2>Verify message with ethers.js</h2>
                    <div className='flex justify-center' style={{ textAlign: 'left' }}>
                        <CodeBlock text={code_source.verify_ethers} language="javascript" theme={dracula} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2>Try it yourself</h2>
                    <div className="flex flex-col items-center justify-center sandbox" style={{ height: '100%' }}>
                        <div className="flex" style={{ margin: '10px' }}>
                            <input placeholder="Message" className="flex input-field" value={signData.ethersMessageInput} onChange={onEthersMessageChange} />
                        </div>
                        <div className="flex" style={{ margin: '10px' }}>
                            <input placeholder="Signature" className="flex input-field" value={signData.ethersSignedMessageInput} onChange={onEthersSignedMessageChange} />
                        </div>
                        <div className="flex" style={{ margin: '10px' }}>
                            <button className="flex btn" onClick={verifyMessageEthers}>Verify Message</button>
                        </div>
                        <div className="flex" style={{ margin: '10px' }}>
                            <h6>Signer: <code>{signData.ethersSigner}</code></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div id="landing-section-4" className="flex flex-row space-around landing-section" style={{ width: '80%', maxWidth: '90%' }}>
                <div className='flex flex-col'>
                    <h2>Verify message hash with Solidity</h2>
                    <div className='flex justify-center' style={{ textAlign: 'left' }}>
                        <CodeBlock text={code_source.verify_solidity} language="javascript" theme={dracula} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2>Try it yourself</h2>
                    <div className="flex flex-col items-center justify-center sandbox" style={{ height: '100%' }}>
                        <div className="flex" style={{ margin: '10px' }}>
                            <input placeholder="Message Hash" className="flex input-field" value={signData.solidityMessageinput} onChange={onSolidityMessageChange} />
                        </div>
                        <div className="flex" style={{ margin: '10px' }}>
                            <input placeholder="Signature" className="flex input-field" value={signData.soliditySignedMessageInput} onChange={onSoliditySignedMessageChange} />
                        </div>
                        <div className="flex" style={{ margin: '10px' }}>
                            <button className="flex btn" onClick={verifyMessageHashSolidity}>Verify Message</button>
                        </div>
                        <div className="flex" style={{ margin: '10px' }}>
                            <h6>Signer: <code>{signData.soliditySigner}</code></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing