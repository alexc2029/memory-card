import "./HeroCard.css";

function HeroCard({ name, imageUrl }) {
	return (
		<button type="button" className="hero-card">
			<img src={imageUrl} alt="" />
			<h2>{name}</h2>
		</button>
	);
}

export default HeroCard;
