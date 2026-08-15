function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIndexes(min, max, count) {
	const randomIndexes = [];
	for (let i = 0; i < count; i++) {
		let index;
		do {
			index = getRandomInt(min, max);
		} while (randomIndexes.includes(index));
		randomIndexes.push(index);
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

function shuffle(array) {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

export { getAllHeroes, trimHeroes, getRandomHeroes, shuffle };
