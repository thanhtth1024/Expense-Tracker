import React from 'react'


export default function ExpenseList({ expenses, onDelete, filter, onFilterChange, totalsByCategory }) {
return (
<div className="list">
<div className="list-header">
<h3>Danh sách chi tiêu</h3>
<div>
<label>Filter: </label>
<select value={filter} onChange={e => onFilterChange(e.target.value)}>
<option value="">Tất cả</option>
{Object.keys(totalsByCategory || {}).map(c => <option key={c} value={c}>{c}</option>)}
</select>
</div>
</div>
{expenses.length === 0 ? <p className="empty">Chưa có chi tiêu</p> : (
<ul>
{expenses.map(exp => (
<li key={exp.id} className="item">
<div>
<div className="desc">{exp.desc || exp.category}</div>
<div className="meta">{new Date(exp.date).toLocaleString()} • {exp.category}</div>
</div>
<div className="amount">{exp.amount.toLocaleString('vi-VN')} ₫ <button onClick={() => onDelete(exp.id)} className="del">X</button></div>
</li>
))}
</ul>
)}
</div>
)
}