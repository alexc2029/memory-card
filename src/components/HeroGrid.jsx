import "./HeroCard";
import HeroCard from "./HeroCard";
import "./HeroGrid.css";
import { shuffle } from "../utils";

function HeroGrid({ heroes, onAlreadyClicked, onNotClicked }) {
	const shuffledHeroes = shuffle(heroes);
	return (
		<div className="hero-grid">
			{shuffledHeroes.map((hero) => (
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
