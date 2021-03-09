import Moves from "./Moves";
import "./Cards.css";
import { useState } from "react";

const Cards = ({ characters, ele, name }) => {
	const [collapse, setCollapse] = useState(false);
	const handleClick = () => {
		setCollapse((prev) => !prev);
	};

	return (
		<div className="character-cards">
			<div className="character-name" onClick={handleClick}>
				<h1> {characters[ele].character.toUpperCase()}</h1>
			</div>
			{console.log(characters[ele])}
			{collapse ? (
				<div className="cards-moves-container">
					<>
						<Moves characters={characters[ele].moves} ele={ele}></Moves>
					</>
					<div>
						<img alt="" src={process.env.PUBLIC_URL + `icons/${name}.jpg`} />
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Cards;
