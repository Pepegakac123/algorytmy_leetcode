// export function positiveSum(arr: number[]): number {
// 	if (!arr || arr.length < 1) return 0;
// 	let total = 0;
// 	return arr.reduce((acc, curr) => {
// 		if (acc >= 0 && curr >= 0) {
// 			total = acc + curr;
// 		}
// 		return total;
// 	}, 0);
// }

export function positiveSum(arr: number[]): number {
	if (!arr || arr.length < 1) return 0;

	return arr
		.filter((value) => value >= 0)
		.reduce((acc, curr) => {
			return acc + curr;
		}, 0);
}
