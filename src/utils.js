function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIndexes(min, max, count) {
	const randomIndexes = [];
	for (let i = 0; i < count; i++) {
		randomIndexes.push(getRandomInt(min, max));
	}
	return randomIndexes;
}

async function getAllHeroes(url) {
	try {
		const response = await fetch(`${url}/all.json`);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
}

function getRandomHeroes(heroes, count) {
	const randomIndexes = getRandomIndexes(0, heroes.length - 1, count);
	const randomHeroes = [];
	for (let i = 0; i < count; i++) {
		randomHeroes.push(heroes[randomIndexes[i]]);
	}
	return randomHeroes;
}

function trimHeroes(heroes) {
	return heroes.map((hero) => {
		return { id: hero.id, name: hero.name, image: hero.images.lg };
	});
}

export { getAllHeroes, trimHeroes, getRandomHeroes };
