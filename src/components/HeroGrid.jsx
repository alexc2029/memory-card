import "./HeroCard";
import HeroCard from "./HeroCard";
import "./HeroGrid.css";

function HeroGrid({ heroes, resetKey, onAlreadyClicked, onNotClicked }) {
	return (
		<div className="hero-grid">
			{heroes.map((hero) => (
				<HeroCard
					key={hero.id + resetKey}
					name={hero.name}
					imageUrl={hero.image}
					onAlreadyClicked={onAlreadyClicked}
					onNotClicked={onNotClicked}
				/>
			))}
		</div>
	);
}

export default HeroGrid;
