import { ConnectButton } from "@rainbow-me/rainbowkit"
import "../styles/index.css"

import metamask_logo from "../assets/metamask.png"
import rainbowkit_logo from "../assets/rainbowkit.png"
import key_icon from "../assets/key.png"

const Navbar = () => {
    return (
        <div className="flex nav-bar">
            <button className="flex items-center">
                <img className="flex" alt="metamask" src={metamask_logo} width="30px" />
                Sign Message
            </button>
            <button className="flex items-center">
                <img className="flex" alt="rainbowkit" src={rainbowkit_logo} width="30px" />
                Sign Message
            </button>
            <button className="flex items-center">
                <img className="flex" alt="rainbowkit" src={key_icon} width="30px" />
                Verify Message
            </button>
            <ConnectButton />
        </div>
    )
}

export default Navbar