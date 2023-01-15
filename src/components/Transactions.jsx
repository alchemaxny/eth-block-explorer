import React, { useEffect, useState } from "react";
import { alchemy } from "../lib/services";
import Header from "./Header";
import { TransactionsList } from "./TransactionsList";
import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";

function Transactions(props) {
    var [blockNumber, setBlockNumber] = useState();
    const [timestamp, setTimestamp] = useState();
    const [transactions, setTransactions] = useState();
    var block = null;
    var message = "Transactions List for the Latest Mined Block: ";

    // React Hook "useEffect" can't called conditionally.
    // React Hooks must be called in the exact same order in every component render
    // FIXME: this costs 1 extra API call
    useEffect(() => {
    async function getBlockNumber() {
        setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
    }, []);

    const location = useLocation();
    if(location.state) {
      block = location.state.block;
      console.log(typeof(block[0]));
      message = `Transactions List for Block Nr. ${block[0]}`;
      blockNumber = Number(block[0]); // convert string to number
    }
    else {
      message += blockNumber; 
    }

    console.log(typeof(blockNumber));

    useEffect(() => {
    async function getTransactions() {
        const block = await alchemy.core.getBlockWithTransactions(blockNumber);
        setTimestamp(block.timestamp);
        setTransactions(block.transactions);
    }

    getTransactions();
    }, [blockNumber]);

    console.log(transactions);
    const navigate = useNavigate();

    return (
    <div>
      <Header />
        <h1><button onClick={()=>navigate(-1)}>Go Back Home</button></h1>
        <h3>{message}</h3>
        <h5>Transactions: {transactions && transactions.length}</h5>
        <h5>Timestamp: {new Date(timestamp * 1_000).toLocaleString()}</h5>
        <hr />

        <table className="tb">
          <thead>
            <tr>
              <th>Transaction hash</th>
              <th>Block Nr.</th>
              <th>Block Hash</th>
              <th>From</th>
              <th>To</th>
              <th>Value</th>
              <th>Nonce</th>
              <th>Confirmations</th>
            </tr>
          </thead>
          <tbody>

          <TransactionsList transactions={transactions} />

          </tbody>
        </table>
    </div>
  );
}

export default Transactions;