import "./App.css";
import HeroGrid from "./components/HeroGrid.jsx";
import { getAllHeroes, getRandomHeroes, trimHeroes } from "./utils.js";

const HERO_COUNT = 12;
const url = "https://akabab.github.io/superhero-api/api";
const heroes = trimHeroes(getRandomHeroes(await getAllHeroes(url), HERO_COUNT));

function App() {
	return (
		<>
			<HeroGrid heroes={heroes} />
		</>
	);
}

export default App;
