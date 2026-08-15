import HeroCard from "./HeroCard";
import "./HeroGrid.css";

function HeroGrid({ heroes, resetKey, onClick }) {
	return (
		<div className="hero-grid">
			{heroes.map((hero) => (
				<HeroCard
					key={hero.id + resetKey}
					name={hero.name}
					imageUrl={hero.image}
					onClick={onClick}
				/>
			))}
		</div>
	);
}

export default HeroGrid;
