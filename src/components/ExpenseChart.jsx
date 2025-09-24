import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)


export default function ExpenseChart({ totals }) {
const labels = Object.keys(totals)
const data = {
labels,
datasets: [
{
label: 'Chi tiêu theo loại',
data: labels.map(l => totals[l]),
backgroundColor: labels.map((_, i) => `hsl(${(i * 60) % 360} 70% 60%)`),
borderWidth: 1
}
]
}


return (
<div className="chart">
<h3>Thống kê</h3>
{labels.length === 0 ? <p>Chưa có dữ liệu</p> : <Pie data={data} />}
</div>
)
}