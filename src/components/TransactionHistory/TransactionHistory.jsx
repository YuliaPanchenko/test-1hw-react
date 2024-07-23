import React from "react";
import style from "../TransactionHistory/TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transTable}>
      <thead className={style.transRow}>
        <tr className={style.transMainItem}>
          <th className={style.transHeader}>Type</th>
          <th className={style.transHeader}>Amount</th>
          <th className={style.transHeader}>Currency</th>
        </tr>
      </thead>
      <tbody className={style.transColumn}>
        {items.map((item) => (
          <tr className={style.transItem} key={item.id}>
            <td className={style.transText}>{item.type}</td>
            <td className={style.transText}>{item.amount}</td>
            <td className={style.transText}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
