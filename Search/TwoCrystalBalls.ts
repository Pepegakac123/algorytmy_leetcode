/**
 * Problem Dwóch Kryształowych Kul
 *
 * Opis problemu:
 * Mamy budynek o n piętrach i dwie identyczne kryształowe kule. Chcemy znaleźć
 * najniższe piętro, z którego upuszczona kula się rozbije. Kula, która się nie
 * rozbije, można użyć ponownie. Rozbita kula nie nadaje się do dalszych testów.
 *
 * Dane wejściowe:
 * - breaks[]: tablica booli, gdzie breaks[i] = true oznacza, że kula rozbije się na piętrze i
 * - Wszystkie piętra powyżej pierwszego "true" też będą "true" (monotoniczność)
 *
 * Rozwiązanie:
 * 1. Używamy pierwiastka z n jako wielkości skoku (optymalna wielkość)
 * 2. Pierwszą kulą skaczemy co sqrt(n) pięter, szukając pierwszego "true"
 * 3. Gdy znajdziemy, cofamy się o sqrt(n) i idziemy liniowo drugą kulą
 *
 * Złożoność:
 * - Czasowa: O(√n) - skaczemy co sqrt(n) + maksymalnie sqrt(n) kroków liniowo
 *
 * @param breaks - tablica reprezentująca punkty załamania dla każdego piętra
 * @returns indeks pierwszego piętra, gdzie kula się rozbije, lub -1 jeśli nie znajdzie
 */
export function twoCrystalBalls(breaks: boolean[]): number {
	const jmpAmount = Math.floor(Math.sqrt(breaks.length));

	let i = jmpAmount;

	for (; i < breaks.length; i += jmpAmount) {
		if (breaks[i]) {
			break;
		}
	}

	i -= jmpAmount;
	for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
		if (breaks[i]) {
			return i;
		}
	}
	return -1;
}
