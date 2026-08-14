import "./App.css";
import HeroGrid from "./components/HeroGrid.jsx";
import Header from "./components/Header.jsx";
import { getAllHeroes, getRandomHeroes, trimHeroes } from "./utils.js";
import { useState } from "react";

const HERO_COUNT = 12;
const url = "https://akabab.github.io/superhero-api/api";
const heroes = trimHeroes(getRandomHeroes(await getAllHeroes(url), HERO_COUNT));

function App() {
	const [score, setScore] = useState(0);
	const [resetKey, setResetKey] = useState(0);
	const increaseScore = () => {
		setScore(score + 1);
	};
	const resetScore = () => {
		setScore(0);
		setResetKey((prevKey) => prevKey + 1);
	};
	return (
		<>
			<Header score={score} />
			<HeroGrid
				heroes={heroes}
				resetKey={resetKey}
				onAlreadyClicked={resetScore}
				onNotClicked={increaseScore}
			/>
		</>
	);
}

export default App;
