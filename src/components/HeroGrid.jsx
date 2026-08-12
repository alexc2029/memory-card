import "./HeroCard";
import HeroCard from "./HeroCard";
import "./HeroGrid.css";

function HeroGrid({ heroes }) {
	console.log(heroes);
	return (
		<div className="hero-grid">
			{heroes.map((hero) => (
				<HeroCard
					key={hero.id}
					name={hero.name}
					imageUrl={hero.image}
				/>
			))}
		</div>
	);
}

export default HeroGrid;
