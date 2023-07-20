import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const getFilterYear = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectFilterYear={getFilterYear}
          selected={filteredYear}
        />
        {/* {props.expenses
          .filter(
            (expense) => expense.date.getFullYear().toString() === filteredYear
          )
          .map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))} */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))
        )} */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          ))} */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
