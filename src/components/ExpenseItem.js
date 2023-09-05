import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>4th September 2023</div>
      <div className="expense-item__description">
        <h2>Insurance</h2>
      </div>
      <div className="expense-item__price ">CHF 300</div>
    </div>
  );
}
