import React, { useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import './Home.css';

function Home() {
    const [address, setAddress] = useState('');
    const [overview, setOverview] = useState(null);
    const connection = new Connection("https://api.devnet.solana.com");

    const fetchSolanaData = async () => {
        try {
            const publicKey = new PublicKey(address);
            const balance = await connection.getBalance(publicKey);
            const accountInfo = await connection.getAccountInfo(publicKey);
            const assignedProgramId = accountInfo?.owner.toString();
            const executable = accountInfo?.executable ? 'Yes' : 'No';
            const allocatedDataSize = accountInfo?.data.length || 0;

            setOverview({
                balance: balance / 1e9, // Convert lamports to SOL
                allocatedDataSize,
                assignedProgramId,
                executable,
            });
        } catch (error) {
            console.error("Failed to fetch data", error);
            setOverview(null);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchSolanaData();
    };

    return (
        <>
            <div className="home-container">
                <form onSubmit={handleSearch}>
                    <div className="search-box">
                        <input
                            type="text"
                            name="searchBox"
                            className="searchBox"
                            placeholder="Search Address, Txn"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </form>
                <br />
                <hr />
                {overview && (
                    <div className="overview-box">
                        <div className="overview-item">
                            <span>Overview</span>
                        </div>
                        <hr />
                        <div className="overview-item">
                            <span>Address</span>
                            <span>{address}</span>
                        </div>
                        <hr />
                        <div className="overview-item">
                            <span>Balance (SOL)</span>
                            <span>{overview.balance}</span>
                        </div>
                        <hr />
                        <div className="overview-item">
                            <span>Allocated Data Size</span>
                            <span>{overview.allocatedDataSize} byte(s)</span>
                        </div>
                        <hr />
                        <div className="overview-item">
                            <span>Assigned Program Id</span>
                            <span>{overview.assignedProgramId}</span>
                        </div>
                        <hr />
                        <div className="overview-item">
                            <span>Executable</span>
                            <span>{overview.executable}</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Home;
