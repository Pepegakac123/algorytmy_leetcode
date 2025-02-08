export function order(words: string): string {
	const wordsArray = words.split(" ");
	const stringMap = new Map<string, number>();
	// biome-ignore lint/complexity/noForEach: <explanation>
	wordsArray.forEach((word) => {
		const orderOfWord = word.search(/\d/);
		stringMap.set(word, Number.parseInt(word[orderOfWord]));
	});
	const sortedEntries = [...stringMap.entries()]
		.sort((a, b) => a[1] - b[1])
		.map((entry) => entry[0]);
	return sortedEntries.join(" ");
}

// Lepsze rozwiązanie

export function betterOrder(words: string): string {
	return words
		.split(" ")
		.sort((a, b) => +a.match(/\d/) || 0 || -+b.match(/\d/))
		.join(" ");
}
