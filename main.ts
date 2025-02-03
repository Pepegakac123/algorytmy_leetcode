const nemo: string[] = ["nemo"];

function findNemo(array: string[]): void {
	for (const item of array) {
		if (item === "nemo") {
			// Consider removing console.log for more accurate benchmarks
			// console.log("Found Nemo!");
			return;
		}
	}
}

function findNemoIncludes(array: string[]): void {
	if (array.includes("nemo")) {
		// Consider removing console.log for more accurate benchmarks
		// console.log("Found Nemo!");
		return;
	}
}

Deno.bench({
	name: "findNemoForLoop",
	fn: () => findNemo(nemo),
});

Deno.bench({
	name: "findNemoIncludes",
	fn: () => findNemoIncludes(nemo),
});
