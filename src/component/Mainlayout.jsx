import React from "react";
import './Mainlayout.css';
import SolanaLogo from './Solana_logo.png';
import { useNavigate } from 'react-router-dom';

function MainLayout() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    return (
        <div className="main-container"> 
            <h1 className="main-title">EXPLORE SOLANA WITH US</h1>
            <div className="main-content">
                <p>Track transactions, view detailed account information,<br />
                analyze token movements with an intuitive interface.</p>
            </div>
            <div className="button-container">
                <button className="connect-button" onClick={handleHomeClick}>HOME</button>
                <button className="learn-more-button">LEARN MORE</button>
            </div>
            <div className="image-container">
                <img src={SolanaLogo} alt="Solana Logo 1" />
                <img src={SolanaLogo} alt="Solana Logo 2" />
                <img src={SolanaLogo} alt="Solana Logo 3" />
                <img src={SolanaLogo} alt="Solana Logo 4" />
                <img src={SolanaLogo} alt="Solana Logo 5" />
            </div>
        </div>
    );
}

export default MainLayout;
