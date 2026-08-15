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
	const [resetKey, setResetKey] = useState(0);
	const updateScore = (wasAlreadyClicked) => {
		setHeroes(shuffle(heroes));
		if (wasAlreadyClicked) {
			if (score > bestScore) setBestScore(score);
			setScore(0);
			setResetKey((prevKey) => prevKey + 1);
		} else {
			setScore(score + 1);
		}
	};
	return (
		<>
			<Header score={score} bestScore={bestScore} />
			<HeroGrid
				heroes={heroes}
				resetKey={resetKey}
				onClick={updateScore}
			/>
		</>
	);
}

export default App;
