import React from "react";
import style from "./TransactionHistory.module.css";

export const TransactionHistory = ({ transactions }) => {
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
        <tbody className={style.body}>
          {transactions.map((item) => {
            return (
              <tr className={style.tr} key={item.id}>
                <td className={style.th}>{item.type}</td>
                <td className={style.th}>{item.amount}</td>
                <td className={style.th}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
