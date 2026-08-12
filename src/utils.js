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

function getRandomIds(count) {
	const randomIds = [];
	for (let i = 0; i < count; i++) {
		randomIds.push(getRandomInt(1, 731));
	}
	return randomIds;
}

async function getHero(url, id) {
	try {
		const heroResponse = await fetch(`${url}/id/${id}.json`);
		if (!heroResponse.ok) {
			throw new Error(`Response status: ${heroResponse.status}`);
		}
		const heroResult = await heroResponse.json();
		return heroResult;
	} catch (error) {
		console.error(error);
	}
}

async function requestRandomHeroes(url, count) {
	const id_array = getRandomIds(count);
	const heroResults = await Promise.allSettled(
		id_array.map((id) => getHero(url, id)),
	);
	return heroResults
		.filter((result) => result.status === "fulfilled")
		.map((result) => result.value);
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
		return { name: hero.name, images: hero.images.sm };
	});
}

export { getAllHeroes, trimHeroes, getRandomHeroes };
