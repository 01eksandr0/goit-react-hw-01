import React from "react";
import style from "./TransactionHistory.module.css";

export const TransactionHistory = ({ transaction }) => {
  return (
    <div>
      <table className={style.table}>
        <thead className={style.head}>
          <tr className={style.tr}>
            <th className={style.th}>Type</th>
            <th className={style.th}>Amount</th>
            <th className={style.th}>Currency</th>
          </tr>
        </thead>
        {transaction.map((item) => {
          return (
            <tbody className={style.body} key={item.id}>
              <tr className={style.tr}>
                <td className={style.th}>{item.type}</td>
                <td className={style.th}>{item.amount}</td>
                <td className={style.th}>{item.currency}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
