import "./Header.css";

function Header({ score, bestScore }) {
	return (
		<div className="header-container">
			<div className="left-header-container">
				<h1>Superhero Memory Game</h1>
				<span className="header-subtext">
					Get points by clicking on a card but don't click on any more
					than once!
				</span>
			</div>
			<div className="right-header-container">
				<span className="score">
					Score: <span className="score-digit">{score}</span>
				</span>
				<span className="score">
					Best score: <span className="score-digit">{bestScore}</span>
				</span>
			</div>
		</div>
	);
}

export default Header;
