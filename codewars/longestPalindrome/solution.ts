export function longestPalindrome(str: string): number {
	const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

	const charCount = new Map<string, number>();
	for (const char of cleanStr) {
		charCount.set(char, (charCount.get(char) || 0) + 1);
	}
	let pairs = 0;
	let hasOdd = false;

	for (const count of charCount.values()) {
		pairs += Math.floor(count / 2);
		if (count % 2 === 1) {
			hasOdd = true;
		}
	}
	return pairs * 2 + (hasOdd ? 1 : 0);
}
