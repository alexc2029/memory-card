import "./App.css";
import { getHeroes } from "./utils";

const HERO_COUNT = 12;
const url = "https://akabab.github.io/superhero-api/api";
const heroes = await getHeroes(url, HERO_COUNT);

function App() {
	console.log(heroes);
	return (
		<>
			<h1>Hello world!</h1>
		</>
	);
}

export default App;
