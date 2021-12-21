import { useEffect, useState } from "react";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";
import Navbar from "./components/Navbar";
import NestedBarChart from "./components/NestedBarChart";
import StackedBarChart from "./components/StackedBarChart";

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await fetch(
				"https://card-admin.dev.intuaition.net/chart/data"
			);
			const getData = await response.json();
			setData(getData.data);
		};
		fetchData();
		setLoading(false);
	}, []);

	const KeywordParsedData = data.reduce((acc, object) => {
		const { keyword, value } = object;
		return { ...acc, [keyword]: [...(acc[keyword] || []), parseInt(value)] };
	}, {});

	const KeywordLabels = Object.keys(KeywordParsedData);
	const SourceParsedData = data.reduce((acc, object) => {
		const { source, value } = object;
		return { ...acc, [source]: [...(acc[source] || []), value] };
	}, {});
	const SourceLabels = Object.keys(SourceParsedData);
	return (
		<div className="w-full">
			{loading ? (
				<div></div>
			) : (
				<>
					<Navbar></Navbar>
					<div className="grid grid-col-3 gap-10 m-20">
						<LineChart
							data={KeywordParsedData}
							labels={SourceLabels}
						></LineChart>
						<DoughnutChart
							data={SourceParsedData}
							label={KeywordLabels}
						></DoughnutChart>
						<NestedBarChart
							data={KeywordParsedData}
							labels={SourceLabels}
						></NestedBarChart>
						<StackedBarChart
							data={KeywordParsedData}
							labels={SourceLabels}
						></StackedBarChart>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
