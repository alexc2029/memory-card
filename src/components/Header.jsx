function Header({ score }) {
	return (
		<div className="header-container">
			<div className="left-header-container">
				<h1>Superhero Memory Game</h1>
				<span className="header-subtext">
					Try to click on every image only once!
				</span>
			</div>
			<div className="right-header-container">
				<span className="score">{score}</span>
			</div>
		</div>
	);
}

export default Header;
