// Na podstawie tablicy której wartości oznaczają wysokosć poszczególnych słupków znaleźć kontener między dwoma liniami który będzie zawierał największą powieszchnie wody

// wzór na powierzchnię - Długość * Wysokość
// Wysokość = min(a,b)
// Długość(indeksy) = (b_i - a_i)  - De fakto to na wynik ma głównie wpływ ta najmniejsza wartość

// Czy wyższa linia w środku naszego kontenera ma wpływ na powierzhcnię? Nie.

//Brute Force
export const findContainer = (height: number[]): number => {
	if (!height || height.length < 2) return 0;
	let maxArea = 0;
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			const Area = Math.min(height[i], height[j]) * (j - i);
			maxArea = Math.max(Area, maxArea);
		}
	}
	return maxArea;
};

export const maxAreaTwoPointers = (height: number[]): number => {
	if (!height || height.length < 2) return 0;
	let maxArea = 0;
	let p1 = 0;
	let p2 = height.length - 1;
	while (p1 < p2) {
		const h = Math.min(height[p1], height[p2]);
		const w = p2 - p1;
		const area = h * w;
		maxArea = Math.max(area, maxArea);
		if (height[p1] <= height[p2]) {
			p1++;
		} else {
			p2--;
		}
	}
	return maxArea;
};
