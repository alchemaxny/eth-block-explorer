import React from "react";
import { formatEther } from "../lib/helper";

export function TransactionsList(props) {
  const { transactions } = props;
  return (
    <>
      {transactions &&
        transactions.map((tx, i) => {
        // showing only 5
        //transactions.slice(0,5).map((tx, i) => {
          return (
            <React.Fragment key={`tx-${i}`}>
            <tr>
              <td className="ellipsis"><span>{tx.hash}</span></td>
              <td className="ellipsis"><span>{tx.blockNumber}</span></td>
              <td className="ellipsis"><span>{tx.blockHash}</span></td>
              <td className="ellipsis"><span>{tx.from}</span></td>
              <td className="ellipsis"><span>{tx.to}</span></td>
              <td className="ellipsis"><span>{formatEther(tx.value)} ETH</span></td>
              <td className="ellipsis"><span>{tx.nonce}</span></td>
              <td className="ellipsis"><span>{tx.confirmations}</span></td>
            </tr>
            </React.Fragment>
          );
        })}
    </>
  );
}