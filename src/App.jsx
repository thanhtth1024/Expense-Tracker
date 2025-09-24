import React, { useMemo, useState } from 'react';
import { Helmet } from "react-helmet";
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [expenses, setExpenses] = useLocalStorage('expenses', []);
  const [filter, setFilter] = useState('');

  function addExpense(exp) {
    setExpenses(prev => [exp, ...prev]);
  }

  function deleteExpense(id) {
    if (!confirm('Xóa chi tiêu này?')) return;
    setExpenses(prev => prev.filter(p => p.id !== id));
  }

  const totalsByCategory = useMemo(() => {
    return expenses.reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + e.amount;
      return acc;
    }, {});
  }, [expenses]);

  const filtered = filter ? expenses.filter(e => e.category === filter) : expenses;
  const totalAll = expenses.reduce((s, e) => s + e.amount, 0);

  return (
    <div className="container">
      <header>
        <Helmet>
          <title>Quản lý chi tiêu cá nhân</title>
        </Helmet>
        <div className="total">Tổng: {totalAll.toLocaleString('vi-VN')} ₫</div>
      </header>

      <main>
        <aside>
          <ExpenseForm onAdd={addExpense} />
          <ExpenseChart totals={totalsByCategory} />
        </aside>

        <section>
          <ExpenseList
            expenses={filtered}
            onDelete={deleteExpense}
            filter={filter}
            onFilterChange={setFilter}
            totalsByCategory={totalsByCategory}
          />
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
