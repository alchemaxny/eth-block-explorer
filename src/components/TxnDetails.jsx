import React, { useEffect, useState } from "react";
import { getIndividualTransaction } from "../lib/services";
import Header from "./Header";
import {useNavigate} from "react-router-dom"
//import { CollectionsOutlined } from "@mui/icons-material";
import { formatEther } from "../lib/helper";
import { useLocation } from "react-router-dom";

function TxnDetails(props) {
    const [txnDetails, setTxnDetails] = useState(null);

    const location = useLocation();
    const txn = location.state.txn;
    console.log(txn[0]);

    useEffect(() => {
        async function getTxnDetails() {
            const txnDetails = await getIndividualTransaction(txn[0]);
            setTxnDetails(txnDetails);
            return () => {
                setTxnDetails(null);
            };
        }
    
        getTxnDetails();
    }, []);

    console.log(txnDetails);

    const navigate = useNavigate();

    if(!txnDetails)
      return;

    return (
    <div>
      <Header />
        <h1><button onClick={()=>navigate(-1)}>Go Back Home</button></h1>
        <h3>Transaction Details</h3>
        <h3>Transaction Hash: {txn[0]}</h3>
        <hr />
        <h3>Block: {txnDetails.blockNumber}</h3>
        <h3>Block Hash: {txnDetails.blockHash}</h3>
        <h3>From: {txnDetails.from}</h3>
        <h3>To: {txnDetails.to}</h3>
        <h3>Value: {formatEther(txnDetails.value)} Ether</h3>
        <h3>Gas Price: {formatEther(txnDetails.gasPrice)} Ether</h3>
        <h3>Gas Limit: {parseInt(txnDetails.gasLimit._hex)}</h3>
        <h3>Confirmations: {txnDetails.confirmations}</h3>
        <h3>Nonce: {txnDetails.nonce}</h3>
    </div>
  );
}

export default TxnDetails;