export function validBraces(braces: string): boolean {
	const stack: string[] = [];

	const bracketPairs = new Map([
		[")", "("],
		["]", "["],
		["}", "{"],
	]);

	for (const brace of braces) {
		if (!bracketPairs.has(brace)) {
			stack.push(brace);
			continue;
		}
		if (stack.pop() !== bracketPairs.get(brace)) return false;
	}
	return stack.length === 0;
}
