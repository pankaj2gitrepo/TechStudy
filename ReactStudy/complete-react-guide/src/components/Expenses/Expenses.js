import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const expenses = props.expenses;

  const filterChangeHandler = (filterData) => {
    console.log(`Expenses`);
    console.log(filterData);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </Card>
  );
};

export default Expenses;