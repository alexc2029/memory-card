import "./App.css";
import { getAllHeroes, getRandomHeroes, trimHeroes } from "./utils.js";

const HERO_COUNT = 12;
const url = "https://akabab.github.io/superhero-api/api";
const heroes = trimHeroes(getRandomHeroes(await getAllHeroes(url), HERO_COUNT));

function App() {
	console.log(heroes);
	return (
		<>
			<h1>Hello world!</h1>
		</>
	);
}

export default App;
