import React from "react";
import "chart.js/auto";
import { Chart as ChartJS, defaults } from "chart.js";
import { Chart } from "react-chartjs-2";

defaults.font.size = 16;

console.log(defaults);
const mean = (arr) => {
	return arr.reduce((a, b) => a + b, 0) / arr.length;
};
const standardDeviation = (arr) => {
	const m = mean(arr);
	return Math.sqrt(
		arr.map((x) => Math.pow(x - m, 2)).reduce((a, b) => a + b, 0) / arr.length
	);
};

const NormalizedData = (data) => {
	const m = mean(data);
	const std = standardDeviation(data);
	return data.map((x) => (x - m) / std);
};

const LineChart = ({ data, labels }) => {
	const chartData = Object.assign({}, data);
	Object.keys(chartData).forEach((key) => {
		chartData[key] = NormalizedData(chartData[key]);
	});
	return (
		<div className="rounded-2xl dark:bg-slate-900 col-span-3 bg-neutral-100 p-14 shadow-2xl mx-auto w-3/5 sm:w-10/12 md:w-full">
			<Chart
				type="line"
				data={{
					responsive: true,
					labels: labels,
					datasets: [
						{
							label: "keyword1",
							fill: false,
							borderColor: "rgba(255, 99, 132)",
							backgroundColor: "rgba(255, 99, 132)",
							data: chartData.keyword1,
							tension: 0.5,
							borderWidth: 5,
						},
						{
							label: "keyword2",
							fill: false,
							borderColor: "rgba(54, 162, 235)",
							backgroundColor: "rgba(54, 162, 235)",
							data: chartData.keyword2,
							tension: 0.5,
							borderWidth: 5,
						},
						{
							label: "keyword3",
							fill: false,
							borderColor: "rgba(255, 206, 86)",
							backgroundColor: "rgba(255, 206, 86)",
							data: chartData.keyword3,
							tension: 0.5,
							borderWidth: 5,
						},
						{
							label: "keyword4",
							fill: false,
							borderColor: "rgba(75, 192, 192)",
							backgroundColor: "rgba(75, 192, 192)",
							data: chartData.keyword4,
							tension: 0.5,
							borderWidth: 5,
						},
						{
							label: "keyword5",
							fill: false,
							borderColor: "rgba(153, 102, 255)",
							backgroundColor: "rgba(153, 102, 255)",
							data: chartData.keyword5,
							tension: 0.5,
							borderWidth: 5,
						},
						{
							label: "keyword6",
							fill: false,
							borderColor: "rgba(255, 159, 64)",
							backgroundColor: "rgba(255, 159, 64)",
							data: chartData.keyword6,
							tension: 0.5,
							borderWidth: 5,
						},
					],
				}}
				height={500}
				options={{
					plugins: {
						legend: {
							display: true,
							position: "bottom",
							align: "middle",
							labels: {
								usePointStyle: true,
								padding: 100,
								font: {
									size: 14,
								},
							},
						},
						tooltip: {
							enabled: false,
						},
					},
					responsive: true,
					maintainAspectRatio: false,
					offsetGridLines: false,
					scales: {
						xAxes: {
							grid: { display: false, borderColor: defaults.color },
							display: true,
						},
						yAxes: {
							grid: {
								display: false,
								drawBorder: false,
							},
							ticks: { beginAtZero: true, maxTicksLimit: 50 },
						},
					},
				}}
			/>
		</div>
	);
};

export default LineChart;
