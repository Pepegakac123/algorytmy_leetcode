function qs(arr: number[], lo: number, hi: number): void {
	if (lo >= hi) {
		return;
	}
	const pivotIndex = partition(arr, lo, hi);
	console.log(pivotIndex, arr[pivotIndex]);
	qs(arr, lo, pivotIndex - 1);
	qs(arr, pivotIndex + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
	const pivot = arr[hi];

	let idx = lo - 1;

	for (let i = lo; i < hi; ++i) {
		// [9, 3, 7, 4, 69, 420, 42]
		if (arr[i] <= pivot) {
			idx++;
			const tmp = arr[i];
			arr[i] = arr[idx];
			arr[idx] = tmp;
		}
	}
	idx++;
	arr[hi] = arr[idx];
	arr[idx] = pivot;

	return idx;
}

export default function quickSort(arr: number[]): void {
	qs(arr, 0, arr.length - 1);
}
