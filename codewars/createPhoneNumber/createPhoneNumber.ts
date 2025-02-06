export function createPhoneNumber(numbers: number[]): string {
	const part1 = ["(", ...numbers.slice(0, 3), ")"].join("");
	const part2 = [
		...numbers.slice(3, 6),
		"-",
		...numbers.slice(6, numbers.length),
	].join("");
	const number = `${part1} ${part2}`;

	return number;
}

// Ciekawe rozwiązanie
export function createPhoneNumberClever(numbers: number[]): string {
	let phoneNumber = "(xxx) xxx-xxxx";

	for (let i = 0; i < numbers.length; i++) {
		phoneNumber = phoneNumber.replace("x", numbers[i].toString());
	}

	return phoneNumber;
}

//Rozwiązanie O(1)
export function createPhoneNumberO1(numbers: number[]): string {
	return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
