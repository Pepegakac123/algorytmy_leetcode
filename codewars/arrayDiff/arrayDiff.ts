export function arrayDiff(a: number[], b: number[]): number[] {
	if (!a || a.length < 1) return [];
	return a.filter((x) => !b.includes(x));
}
