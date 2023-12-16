// ** import external libraries & styles
import React from 'react';
import ReactDOM from 'react-dom/client';
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
// ** import custom components & styles
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ** import custom constants & config
import { wagmiConig } from './config';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <WagmiConfig config={wagmiConig.config}>
            <RainbowKitProvider chains={wagmiConig.chains}>
                <App />
            </RainbowKitProvider>
        </WagmiConfig>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
