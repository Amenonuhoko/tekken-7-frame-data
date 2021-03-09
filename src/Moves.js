import "./Moves.css";

const Moves = ({ characters }) => {
	return (
		<div className="moves-content">
			{characters.map((moves, i) => {
				if (i % 2 === 0) {
					return (
						<div key={i} className="moves-box moves-first">
							<h3>{moves.Command}</h3>
							<p>Damage: {moves.Damage} </p>
							<p>Block: {moves.Block}</p>
							{moves.Hit ? <p>Hit: {moves.Hit}</p> : null}
							{moves.Startup ? <p>Frame: {moves.Startup}</p> : null}
						</div>
					);
				} else {
					return (
						<div key={i} className="moves-box moves-second">
							<h3>{moves.Command}</h3>
							<p>Damage: {moves.Damage} </p>
							<p>Block: {moves.Block}</p>
							{moves.Startup ? <p>Frame: {moves.Startup}</p> : null}
						</div>
					);
				}
			})}
		</div>
	);
};

export default Moves;
