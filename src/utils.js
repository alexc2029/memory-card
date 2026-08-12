function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
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

async function getRandomHeroes(url, count) {
	const id_array = getRandomIds(count);
	const heroResults = await Promise.allSettled(
		id_array.map((id) => getHero(url, id)),
	);
	return heroResults
		.filter((result) => result.status === "fulfilled")
		.map((result) => result.value);
}
