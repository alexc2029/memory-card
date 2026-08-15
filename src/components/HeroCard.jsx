import "./HeroCard.css";

function HeroCard({ id, name, imageUrl, onClick }) {
	const handleClick = () => {
		window.scrollTo(0, 0);
		onClick(id);
	};
	return (
		<button type="button" className="hero-card" onClick={handleClick}>
			<img src={imageUrl} alt="" />
			<h2>{name}</h2>
		</button>
	);
}

export default HeroCard;
