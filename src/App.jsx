import "./App.css";
import HeroGrid from "./components/HeroGrid.jsx";
import Header from "./components/Header.jsx";
import { getAllHeroes, getRandomHeroes, trimHeroes, shuffle } from "./utils.js";
import { useState } from "react";

const HERO_COUNT = 12;
const url = "https://akabab.github.io/superhero-api/api";
const heroes = trimHeroes(getRandomHeroes(await getAllHeroes(url), HERO_COUNT));

function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [resetKey, setResetKey] = useState(0);
	const [shuffledHeroes, setShuffledHeroes] = useState(heroes);
	const updateScore = (wasAlreadyClicked) => {
		setShuffledHeroes(shuffle(shuffledHeroes));
		if (wasAlreadyClicked) {
			if (score > bestScore) setBestScore(score);
			setScore(0);
			setResetKey((prevKey) => prevKey + 1);
			setShuffledHeroes(shuffle(shuffledHeroes));
		} else {
			setScore(score + 1);
		}
	};
	return (
		<>
			<Header score={score} bestScore={bestScore} />
			<HeroGrid
				heroes={shuffledHeroes}
				resetKey={resetKey}
				onClick={updateScore}
			/>
		</>
	);
}

export default App;
