import React, { useEffect, useState } from "react";
import { getAccountBalance, getAccountTxs } from "../lib/services";
import Header from "./Header";
import {useNavigate} from "react-router-dom"
import { CollectionsOutlined } from "@mui/icons-material";
import { formatEther } from "../lib/helper";
import { useLocation } from "react-router-dom";
import { AccountTransactions } from "./AccountTransactions";

function Addresses(props) {
    const [balance, setAccountBalance] = useState(null);
    const [transactions, setTransactions] = useState(null);

    console.log(props);
    const location = useLocation();
    const  address = location.state.address;
    /*
    var address = null;
    if(location.state) {
      address = location.state.address;
    }
    else {
      address = props.from;
    }*/
    console.log(address[0]);

    useEffect(() => {
        async function getBalance() {
            const balance = await getAccountBalance(address[0]);
            setAccountBalance(balance.toString());
            return () => {
                setAccountBalance(null);
            };
        }
    
        getBalance();
    }, []);

    console.log(balance);


    useEffect(() => {
        async function getTransactions() {
          const transactions = await getAccountTxs(address[0]);
          setTransactions(transactions);
          return () => {
            setTransactions(null);
          }
        }

        getTransactions();
    }, []);

    console.log(transactions);

    const navigate = useNavigate();

    return (
    <div>
      <Header />
        <h1><button onClick={()=>navigate(-1)}>Go Back Home</button></h1>
        <h3>Address Details</h3>
        <h3>Address: {address}</h3>
        <h3>Balance: {balance ? formatEther(balance) : null} Ether</h3> {/*without the ternary operator it goes boom sometimes*/}
        <hr />
        <AccountTransactions transactions={transactions} />
    </div>
  );
}

export default Addresses;