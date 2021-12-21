import React, { useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js";
import { Chart } from "react-chartjs-2";

const DoughnutChart = ({ data, label }) => {
	const [chartData, setChartData] = React.useState([]);
	useEffect(() => {
		setChartData(data["facebook"]);
	}, [data]);
	const setChartDataHandler = (event) => {
		setChartData(data[event.target.value]);
	};
	return (
		<div className=" bg-neutral-100 dark:bg-slate-900 col-span-1 p-14 rounded-xl shadow-2xl">
			<div>
				<div className="dark:text-neutral-50 font-medium">
					<label htmlFor="filter" className="p-4">
						Filter by source
					</label>
					<select
						name="filter"
						id="filter"
						className="px-4 py-1 bg-neutral-200 dark:bg-slate-800  rounded-lg outline-none focus:border-neutral-400"
						onChange={setChartDataHandler}
					>
						<option value="facebook" defaultChecked="true">
							Facebook
						</option>
						<option value="twitter">Twitter</option>
						<option value="instagram">Instagram</option>
						<option value="youtube">Youtube</option>
						<option value="reddit">Reddit</option>
						<option value="bing">Bing</option>
					</select>
				</div>
				<Chart
					type="doughnut"
					data={{
						labels: label,
						datasets: [
							{
								data: chartData,
								backgroundColor: [
									"rgb(255, 99, 132)",
									"rgb(54, 162, 235)",
									"rgb(255, 205, 86)",
									"rgb(75, 192, 192)",
									"rgb(153, 102, 255)",
									"rgb(255, 159, 64)",
								],
								borderColor: ["transparent"],
							},
						],
					}}
					options={{
						responsive: false,
						maintainAspectRatio: false,
						plugins: {
							legend: {
								display: true,
								position: "bottom",
								align: "middle",
								labels: {
									usePointStyle: true,
									padding: 10,
								},
							},
							tooltip: {
								enabled: false,
							},
						},
					}}
					height={500}
				/>
			</div>
		</div>
	);
};

export default DoughnutChart;
