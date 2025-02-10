export function binarySearch(haystack: number[], needle: number): boolean {
	let lo = 0;
	let hi = haystack.length;
	do {
		const mid = Math.floor(lo + (hi - lo) / 2);
		const v = haystack[mid];
		if (v === needle) {
			return true;
			// biome-ignore lint/style/noUselessElse: <explanation>
		} else if (v > needle) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	} while (lo < hi);
	return false;
}
