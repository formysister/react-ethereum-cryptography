import React from 'react';
import { Navbar } from './components';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <img src={logo} className="App-logo" alt="logo" />
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
                </div>
            </header>
        </div>
    );
}

export default App;