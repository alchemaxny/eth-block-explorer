import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { alchemy } from "../lib/services";

// https://www.coingecko.com/en/api/documentation
function DisplayPrice (props) {
    const [etherPrice, setEtherPrice] = useState();

    useEffect(() => {
        async function getEtherPrice() {
            const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
            const eth = await response.json();
            setEtherPrice(eth.ethereum.usd);
        }

        getEtherPrice();
    });

    return <div className="note">
        <h1>{props.hName}</h1>
        <p>{etherPrice} USD</p>
    </div>
}

function DisplayBlock(props) {
    const [blockNumber, setBlockNumber] = useState();

    useEffect(() => {
        async function getBlockNumber() {
            setBlockNumber(await alchemy.core.getBlockNumber());
        }

        getBlockNumber();
    });

    return <div className="note">
        <h1>{props.hName}</h1>
        <p>{blockNumber}</p>
    </div>
}

function DisplayBlockTransactions(props) {
    const [blockNumber, setBlockNumber] = useState();
    const [timestamp, setTimestamp] = useState();
    const [transactions, setTransactions] = useState();

    useEffect(() => {
    async function getBlockNumber() {
        setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
    }, []);
    useEffect(() => {
    async function getTransactions() {
        const block = await alchemy.core.getBlockWithTransactions(blockNumber);
        setTimestamp(block.timestamp);
        setTransactions(block.transactions);
    }

    getTransactions();
    }, [blockNumber]);

    //console.log(transactions);

    return (
    <div className="note-wide">
        
            <h3>{props.hName}</h3>
            <h5>Transactions: {transactions && transactions.length}</h5>
            <h5>Timestamp: {new Date(timestamp * 1_000).toLocaleString()}</h5>
    </div>
  );
}

function DisplayTransactionsRoute(props) {
  const year = new Date().getFullYear();
  return (
    <div className="note" align="center">
        <h1>{props.hName}</h1>
        <p><Link to="/block">View</Link></p>
    </div>
  );
}

export { DisplayPrice, DisplayBlock, DisplayBlockTransactions, DisplayTransactionsRoute };