import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const getFilterYear = (filterYear) => {
    setFilteredYear(filterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectFilterYear={getFilterYear}
          selected={filteredYear}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
