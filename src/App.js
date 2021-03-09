import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import "./App.css";

const App = () => {
	const [loading, setLoading] = useState(false);
	const [characters, setCharacters] = useState({});
	useEffect(() => {
		setLoading(true);
		axios
			.get("https://t7frames-server.herokuapp.com/frame-data")
			.then((response) => {
				setLoading(false);
				setCharacters(response.data);
			});
	}, []);
	return (
		<>
			<div className="App-header">
				<img
					src={process.env.PUBLIC_URL + "icons/tekken_7.png"}
					alt=""
					width="700"
					height="400"
				/>
			</div>
			{loading ? (
				<>
					<h1>Loading</h1>
				</>
			) : (
				<>
					{Object.keys(characters).map((ele, i) => {
						return (
							<Cards
								key={i}
								characters={characters}
								ele={ele}
								name={characters[ele].character}
							></Cards>
						);
					})}
				</>
			)}
		</>
	);
};

export default App;
