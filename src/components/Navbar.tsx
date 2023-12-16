import { ConnectButton } from "@rainbow-me/rainbowkit"
import "../styles/index.css"

import metamask_logo from "../assets/metamask.png"
import rainbowkit_logo from "../assets/rainbowkit.png"
import key_icon from "../assets/key.png"

const Navbar = () => {
    return (
        <div className="flex nav-bar justify-between">
            <div className="flex space-around">
                <button className="flex items-center btn">
                    <img className="flex" alt="metamask" src={metamask_logo} width="30px" />
                    Sign Message
                </button>
                <button className="flex items-center btn">
                    <img className="flex" alt="rainbowkit" src={rainbowkit_logo} width="30px" />
                    Sign Message
                </button>
                <button className="flex items-center btn">
                    <img className="flex" alt="rainbowkit" src={key_icon} width="30px" />
                    Verify Message
                </button>
            </div>
            <div className="flex">
                <ConnectButton showBalance={false} />
            </div>
        </div>
    )
}

export default Navbar