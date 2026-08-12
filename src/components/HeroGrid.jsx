import "./HeroCard";
import HeroCard from "./HeroCard";

function HeroGrid({ heroes }) {
	console.log(heroes);
	return (
		<div className="hero-grid">
			{heroes.map((hero) => (
				<HeroCard name={hero.name} imageUrl={hero.image} />
			))}
		</div>
	);
}

export default HeroGrid;
