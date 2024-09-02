import React, { FC, useMemo } from 'react';
import { ConnectionProvider, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL, clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'; // Updated import
// import { Airdrop } from './components/Airdrop';
import '@solana/wallet-adapter-react-ui/styles.css';
import './Navbar.css';
// Removed import { Anchor } from 'react-bootstrap';

function Navbar() {

    const wallet = useWallet();
    const SOL_HOST = clusterApiUrl("devnet");
    const connection = new Connection(SOL_HOST); 
    let lamports = 0;
    const getBalance = async () => {
        if(wallet?.publicKey){
            const solBalance = await connection.getBalance(wallet.publicKey);
            lamports = solBalance / LAMPORTS_PER_SOL;
            console.log(`Amount: ${lamports}`);
        }
    };

    useMemo(() => {
        getBalance();
    }, [wallet]);

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
