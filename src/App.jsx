import "./App.css";
import HeroGrid from "./components/HeroGrid.jsx";
import Header from "./components/Header.jsx";
import { getAllHeroes, getRandomHeroes, trimHeroes, shuffle } from "./utils.js";
import { useState, useEffect } from "react";

const HERO_COUNT = 12;
const url = "https://akabab.github.io/superhero-api/api";

function App() {
	const [heroes, setHeroes] = useState([]);
	useEffect(() => {
		async function fetchNewHeroes() {
			setHeroes(
				trimHeroes(
					getRandomHeroes(await getAllHeroes(url), HERO_COUNT),
				),
			);
		}
		fetchNewHeroes();
	}, []);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clickedIds, setClickedIds] = useState([]);
	const handleCardClick = (id) => {
		setHeroes(shuffle(heroes));
		if (clickedIds.includes(id)) {
			setScore(0);
			setClickedIds([]);
		} else {
			setClickedIds([...clickedIds, id]);
			const newScore = score + 1; // to account for state delay
			setScore(newScore);
			if (newScore > bestScore) setBestScore(newScore);
		}
	};
	return (
		<>
			<Header score={score} bestScore={bestScore} />
			<HeroGrid heroes={heroes} onClick={handleCardClick} />
		</>
	);
}

export default App;
