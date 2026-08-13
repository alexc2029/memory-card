import "./HeroCard";
import HeroCard from "./HeroCard";
import "./HeroGrid.css";

function HeroGrid({ heroes, onAlreadyClicked, onNotClicked }) {
	console.log(heroes);
	return (
		<div className="hero-grid">
			{heroes.map((hero) => (
				<HeroCard
					key={hero.id}
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
