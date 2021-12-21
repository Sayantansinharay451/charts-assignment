import React from "react";
import "chart.js/auto";
import { Chart as ChartJS, defaults } from "chart.js";
import { Chart } from "react-chartjs-2";

const Means = new Array(5);
const mean = (data) => {
	return data.reduce((a, b) => a + b, 0) / data.length;
};

const standardization = (data) => {
	const gm = mean(Means);
	return data.map((x) => (x > gm ? gm : x));
};

const NestedBarChart = ({ data, labels }) => {
	const chartData = Object.assign({}, data);
	for (let key in chartData) {
		Means.push(mean(chartData[key]));
	}
	Object.keys(chartData).forEach((key) => {
		chartData[key] = standardization(chartData[key]);
	});
	return (
		<div className="bg-neutral-100 dark:bg-slate-900 col-span-2 p-14 rounded-2xl shadow-2xl">
			<Chart
				type="bar"
				data={{
					responsive: true,
					labels: labels,
					datasets: [
						{
							label: "keyword1",
							borderWidth: 3,
							borderColor: "transparent",
							barThickness: 15,
							backgroundColor: "rgba(255, 99, 132)",
							data: chartData.keyword1,
							borderRadius: {
								topLeft: 100,
								topRight: 100,
							},
							minBarLength: 20,
						},
						{
							label: "keyword2",
							borderWidth: 3,
							borderColor: "transparent",
							barThickness: 15,
							backgroundColor: "rgba(54, 162, 235)",
							data: chartData.keyword2,
							borderRadius: {
								topLeft: 100,
								topRight: 100,
							},
							minBarLength: 20,
						},
						{
							label: "keyword3",
							borderWidth: 3,
							borderColor: "transparent",
							barThickness: 15,
							backgroundColor: "rgba(255, 206, 86)",
							data: chartData.keyword4,
							borderRadius: {
								topLeft: 100,
								topRight: 100,
							},
							minBarLength: 20,
						},
						{
							label: "keyword4",
							barThickness: 15,
							borderWidth: 3,
							borderColor: "transparent",
							backgroundColor: "rgba(75, 192, 192)",
							data: chartData.keyword4,
							borderRadius: {
								topLeft: 100,
								topRight: 100,
							},
							minBarLength: 20,
						},
						{
							label: "keyword5",
							borderWidth: 3,
							borderColor: "transparent",
							barThickness: 15,
							backgroundColor: "rgba(153, 102, 255)",
							data: chartData.keyword5,
							borderRadius: {
								topLeft: 100,
								topRight: 100,
							},
							minBarLength: 20,
						},
						{
							label: "keyword6",
							borderWidth: 3,
							borderColor: "transparent",
							barThickness: 15,
							backgroundColor: "rgba(255, 159, 64)",
							data: chartData.keyword6,
							borderRadius: {
								topLeft: 100,
								topRight: 100,
							},
							minBarLength: 20,
						},
					],
				}}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					plugins: {
						legend: {
							display: true,
							position: "bottom",
							align: "middle",
							labels: {
								padding: 20,
								usePointStyle: true,
							},
						},
						tooltip: {
							enabled: false,
						},
					},
					scales: {
						xAxis: {
							grid: {
								display: false,
								borderColor: defaults.color,
							},
						},
						y: {
							grid: {
								display: false,
								drawBorder: true,
								borderColor: defaults.color,
							},
						},
					},
				}}
				height={100}
				width={300}
			/>
		</div>
	);
};

export default NestedBarChart;
