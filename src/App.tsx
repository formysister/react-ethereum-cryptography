import React from 'react';
import { Navbar, Landing, Footer } from './components';
import logo from './logo.svg';
import './App.css';

import ethers_logo from './assets/ethers.png'
import metamask_logo from './assets/metamask.png'
import rainbow_logo from './assets/rainbowkit.png'
import solidity_logo from './assets/solidity.png'

declare global {
    interface Window {
        ethereum?: any;
    }
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <img src={logo} className="App-logo" alt="logo" />
                <div className='flex logos-bar'>
                    <img className='flex' src={ethers_logo} alt='ethers' width="180px" />
                    <img className='flex' src={metamask_logo} alt='metamask' width="100px" />
                    <img className='flex' src={rainbow_logo} alt='rainbow' width="100px" />
                    <img className='flex' src={solidity_logo} alt='wagmi' width="100px" />
                </div>
                <p>
                    Fork this app and customize your cryptography
                </p>
                <div className='flex flex-row justify-between link-bar'>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <a
                        className="App-link"
                        href="https://www.rainbowkit.com/docs/introduction"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Rainbowkit
                    </a>
                    <a
                        className="App-link"
                        href="https://wagmi.sh/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Wagmi
                    </a>
                    <a
                        className="App-link"
                        href="https://docs.metamask.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Metamask
                    </a>
                    <a
                        className="App-link"
                        href="https://docs.ethers.org/v5/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Ethers.js
                    </a>
                </div>
            </header>
            <Landing />
            <Footer />
        </div>
    );
}

export default App;