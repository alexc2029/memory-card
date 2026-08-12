import "./HeroCard.css";
import { useState } from "react";

function HeroCard({ name, imageUrl }) {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		setClicked(true);
	};
	return (
		<button type="button" className="hero-card" onClick={handleClick}>
			<img src={imageUrl} alt="" />
			<h2>{name}</h2>
		</button>
	);
}

export default HeroCard;
