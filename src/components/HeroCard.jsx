import "./HeroCard.css";
import { useState } from "react";

function HeroCard({ name, imageUrl, onClick }) {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		window.scrollTo(0, 0);
		onClick(clicked);
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
