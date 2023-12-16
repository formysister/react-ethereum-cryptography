import React from "react"
import { CodeBlock, dracula } from "react-code-blocks"

import "../styles/index.css"
import { code_source, text } from "../data"

const Landing = () => {

    const signMessageWithMetamask = () => {

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
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <textarea className="flex text-area" />
                        </div>
                        <div className="flex">
                            <button>Sign Message</button>
                        </div>
                        <div className="flex">
                            <textarea className="flex text-area" placeholder="Signed message hash" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing