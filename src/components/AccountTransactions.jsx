import React from "react";
import { formatEther } from "../lib/helper";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';


export function AccountTransactions(props) {
  const { transactions } = props;
  const navigate = useNavigate();
/*
  const handleClick = (state) => {
    console.log(state);
  }
*/
  return (
    <>
        <table className="tb">
          <thead>
            <tr>
              <th>Transaction hash</th>
              <th>Method</th>
              <th>Block</th>
              <th>Age</th>
              <th>From</th>
              <th>To</th>
              <th>Value</th>
              <th>Txn Fee</th>
            </tr>
          </thead>
          <tbody>
      {transactions &&
        transactions.map((tx, i) => {
          return (
            <React.Fragment key={`tx-${i}`}>
            <tr>
              <td className="ellipsis"><span>{tx.hash}</span></td>
              <td className="ellipsis"><span>{tx.methodId}</span></td>
              <td className="ellipsis"><span>{tx.blockNumber}</span></td>
              <td className="ellipsis"><span>{tx.timeStamp}</span></td>
              <td className="ellipsis"><span>{tx.from}</span></td>
              {/*navigate(`/address`, {state:{ address: [tx.from]}})*/}
              {/*<Link className="ellipsis" to={{ pathname: '/address', state:{ address: [tx.from]}}} onClick={() => handleClick(location.state)}><span>{tx.from}</span></Link>*/}
              {/*<Link className="ellipsis" to={{ pathname: '/address', from: [tx.from]}}><span>{tx.from}</span></Link>*/}
              
              <td className="ellipsis"><span>{tx.to}</span></td>
              <td className="ellipsis"><span>{formatEther(tx.value)} Ether</span></td>
              <td className="ellipsis"><span>{formatEther(tx.gasPrice*tx.gasUsed)}</span></td>
            </tr>
            </React.Fragment>
          );
        })}
        </tbody>
        </table>
    </>
  );
}