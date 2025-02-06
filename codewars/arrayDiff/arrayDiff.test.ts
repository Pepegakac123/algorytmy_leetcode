import { describe, it } from "@std/testing";
import { expect } from "jsr:@std/expect";
import { arrayDiff } from "./arrayDiff.ts";

describe("Basic tests", () => {
	it("Should handle empty arrays", () => {
		expect(arrayDiff([], [4, 5])).toEqual([]);
	});

	it("Should remove value that exists in array b", () => {
		expect(arrayDiff([3, 4], [3])).toEqual([4]);
	});

	it("Should return same array if b is empty", () => {
		expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);
	});

	it("Should remove multiple values present in array b", () => {
		expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
	});
});
