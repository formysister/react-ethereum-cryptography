import "../styles/index.css"

const Footer = () => {
    return (
        <div className="flex footer justify-between">
            <div className="flex space-around">
                <a href="https://goerli.etherscan.io/address/0xd6e75c476034ae07093bc7b71a49096587cdbc85#code" target="_blank" rel="noreferrer">Contract on Goerli Etherscan</a>
            </div>
            <div className="flex justify-center items-center">
                <span >
                    Made with <span style={{ color: 'red' }}>❤</span> by <a href="https://github.com/formysister" target="_blank" rel="noreferrer">CYBER STORM</a>
                </span>
            </div>
        </div>
    )
}

export default Footer