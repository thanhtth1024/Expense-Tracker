import React, { useState } from 'react'


const defaultCategories = [
'Ăn uống', 'Đi lại', 'Mua sắm', 'Giải trí', 'Học tập', 'Khác'
]


export default function ExpenseForm({ onAdd }) {
const [amount, setAmount] = useState('')
const [desc, setDesc] = useState('')
const [category, setCategory] = useState(defaultCategories[0])


function submit(e) {
e.preventDefault()
const value = parseFloat(amount)
if (isNaN(value) || value <= 0) return alert('Nhập số tiền hợp lệ')
onAdd({ id: Date.now(), amount: value, desc, category, date: new Date().toISOString() })
setAmount('')
setDesc('')
setCategory(defaultCategories[0])
}


return (
<form className="form" onSubmit={submit}>
<div className="row">
<input type="number" step="0.01" placeholder="Số tiền" value={amount} onChange={e => setAmount(e.target.value)} required />
<select value={category} onChange={e => setCategory(e.target.value)}>
{defaultCategories.map(c => <option key={c} value={c}>{c}</option>)}
</select>
</div>
<input type="text" placeholder="Mô tả (tuỳ chọn)" value={desc} onChange={e => setDesc(e.target.value)} />
<button type="submit">Thêm chi phí</button>
</form>
)
}