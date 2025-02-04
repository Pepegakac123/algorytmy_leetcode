// Czy wszystkie liczby są pozytywne, czy moga być tam jakieś negatywne liczby  wszystkie są pozytywne

// Czy są jakieś duplikaty w tablicy - nie nie ma

// Czy zawsze będzie można znaleźć rozwiązanie - nie

// Co zwracamy jeżeli nie będzie rozwiązania - null

// Czy możne być kilka par które spełniają warunek - nie

//Brute Force Solutio O(n^2)
export function twoSum(
	array: number[],
	target: number,
): number[] | null | undefined {
	if (!array || array.length <= 2) return null;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			const newTarget = target - array[i];
			if (newTarget - array[j] === 0 && j !== i) {
				return [i, j];
			}
		}
	}
	return null;
}

//Faster Solution with hasMap

export function twoSumMap(
	nums: number[],
	target: number,
): number[] | null | undefined {
	if (!nums || nums.length < -2) return null;
	const pairs = new Map();
	for (let p1 = 0; p1 < nums.length; p1++) {
		const numberToFind = target - nums[p1];
		if (pairs.has(nums[p1])) {
			return [pairs.get(target - numberToFind), p1];
		}
		pairs.set(numberToFind, p1);
	}
	return null;
}

console.log(twoSumMap([2, 7, 11, 15], 9));
console.log(twoSumMap([3, 3], 6));
