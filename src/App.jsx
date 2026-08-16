import "./App.css";
import HeroGrid from "./components/HeroGrid.jsx";
import Header from "./components/Header.jsx";
import { getAllHeroes, getRandomHeroes, trimHeroes, shuffle } from "./utils.js";
import { useState, useEffect } from "react";

const HERO_COUNT = 12;
const url = "https://akabab.github.io/superhero-api/api";

function App() {
	const [allHeroes, setAllHeroes] = useState([]);
	const [heroes, setHeroes] = useState([]);
	useEffect(() => {
		async function fetchHeroes() {
			const currentAllHeroes = await getAllHeroes(url);
			setAllHeroes(currentAllHeroes);
			setRandomHeroes(currentAllHeroes);
		}
		fetchHeroes();
	}, []);
	const [score, setScore] = useState(11);
	const [bestScore, setBestScore] = useState(0);
	const [clickedIds, setClickedIds] = useState([]);
	const [gameWon, setGameWon] = useState(false);
	const handleCardClick = (id) => {
		setHeroes(shuffle(heroes));
		if (clickedIds.includes(id)) {
			resetScoreAndClicks();
		} else {
			if (score === 0) setGameWon(false);
			setClickedIds([...clickedIds, id]);
			handleScoreIncrease();
		}
	};
	return (
		<>
			<Header
				score={score}
				bestScore={bestScore}
				displayGameWon={gameWon}
				onButtonClick={handleNewHeroes}
			/>
			<HeroGrid heroes={heroes} onClick={handleCardClick} />
		</>
	);

	function handleNewHeroes() {
		setRandomHeroes(allHeroes);
		resetScoreAndClicks();
	}

	function handleScoreIncrease() {
		const newScore = score + 1; // to account for state delay
		setScore(newScore);
		if (newScore > bestScore) setBestScore(newScore);
		if (newScore === HERO_COUNT) {
			setGameWon(true);
			resetScoreAndClicks();
		}
	}
	function setRandomHeroes(currentAllHeroes) {
		setHeroes(trimHeroes(getRandomHeroes(currentAllHeroes, HERO_COUNT)));
	}
	function resetScoreAndClicks() {
		setClickedIds([]);
		setScore(0);
	}
}

export default App;
