function Header({ score, bestScore }) {
	return (
		<div className="header-container">
			<div className="left-header-container">
				<h1>Superhero Memory Game</h1>
				<span className="header-subtext">
					Try to click on every image only once!
				</span>
			</div>
			<div className="right-header-container">
				<span className="score">Score: {score}</span>
				<span className="score">Best score: {bestScore}</span>
			</div>
		</div>
	);
}

export default Header;
