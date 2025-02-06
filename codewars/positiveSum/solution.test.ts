import { describe, it } from "@std/testing";
import { expect } from "jsr:@std/expect";
import { positiveSum } from "./solution.ts";

describe("Basic tests", () => {
	it("Should sum positive numbers", () => {
		expect(positiveSum([1, 2, 3, 4, 5])).toEqual(15);
	});

	it("Should ignore negative numbers", () => {
		expect(positiveSum([1, -2, 3, 4, 5])).toEqual(13);
	});

	it("Should return 0 for empty array", () => {
		expect(positiveSum([])).toEqual(0);
	});

	it("Should return 0 when all numbers are negative", () => {
		expect(positiveSum([-1, -2, -3, -4, -5])).toEqual(0);
	});

	it("Should handle mix of positive and negative numbers", () => {
		expect(positiveSum([-1, 2, 3, 4, -5])).toEqual(9);
	});
});
