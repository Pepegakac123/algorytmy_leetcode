export function duplicateEncode(word: string) {
	let decodedValue = "";
	const encodedWord = new Map();
	for (const char of word) {
		if (encodedWord.has(char.toLowerCase()))
			encodedWord.set(char.toLowerCase(), ")");
		else encodedWord.set(char.toLowerCase(), "(");
	}
	for (const char of word) {
		decodedValue += encodedWord.get(char.toLowerCase());
	}
	return decodedValue;
}

duplicateEncode("recede");

//Smart rozwiązanie

export function duplicateEncodeSmart(word: string) {
	// ...
	return word
		.toLowerCase()
		.split("")
		.map((a, i, w) => {
			return w.indexOf(a) === w.lastIndexOf(a) ? "(" : ")";
		})
		.join("");
}

// duplicateEncode("recede")

// 1. toLowerCase() -> "recede"
// 2. split('') -> ['r','e','c','e','d','e']
// 3. map() dla każdego znaku:
//    'r' -> indexOf('r')=0 == lastIndexOf('r')=0 -> "("
//    'e' -> indexOf('e')=1 != lastIndexOf('e')=5 -> ")"
//    'c' -> indexOf('c')=2 == lastIndexOf('c')=2 -> "("
//    'e' -> indexOf('e')=1 != lastIndexOf('e')=5 -> ")"
//    'd' -> indexOf('d')=4 == lastIndexOf('d')=4 -> "("
//    'e' -> indexOf('e')=1 != lastIndexOf('e')=5 -> ")"
// 4. join('') -> "()()()"
