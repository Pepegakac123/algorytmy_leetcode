import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "@std/expect";
import { binarySearch } from "../Search/binarySearch.ts";
describe("Binary Search", () => {
	it("binary search array", () => {
		const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
		expect(binarySearch(foo, 69)).toEqual(true);
		expect(binarySearch(foo, 1336)).toEqual(false);
		expect(binarySearch(foo, 69420)).toEqual(true);
		expect(binarySearch(foo, 69421)).toEqual(false);
		expect(binarySearch(foo, 1)).toEqual(true);
		expect(binarySearch(foo, 0)).toEqual(false);
	});
});
