import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
// import { Airdrop } from './components/Airdrop';
import '@solana/wallet-adapter-react-ui/styles.css';


import './Navbar.css';

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    TEST-SOLSCAN
                </a>
                <ul className="nav-menu">
                <ConnectionProvider endpoint={"https://api.devnet.solana.com"} autoConnect>
                    <WalletProvider wallets={[]} autoConnect>
                    <WalletModalProvider>
                        <WalletMultiButton />
                        <WalletDisconnectButton />
                        </WalletModalProvider>
                    </WalletProvider>
                </ConnectionProvider>
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar;
