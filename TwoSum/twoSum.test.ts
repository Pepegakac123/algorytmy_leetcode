import { describe, it } from "@std/testing";
import { expect } from "jsr:@std/expect";
import { twoSum, twoSumMap } from "./twoSum.ts";

const testArrays = {
	valid: {
		normal: [1, 3, 7, 9, 2],
		sameNumbers: [3, 3],
	},
	invalid: {
		empty: [],
		singleArg: [5],
		noPair: [5, 4, 2, 8],
	},
};

describe("Two Sum Function  Brute Force", () => {
	it("Return null if the function does not find a valid pair", () => {
		const result = twoSum(testArrays.invalid.noPair, 11);
		expect(result).toBeNull();
	});

	it("Return null if the array is empty", () => {
		const result = twoSum(testArrays.invalid.empty, 11);
		expect(result).toBeNull();
	});
	it("Return null if the array has less than two elements", () => {
		const result = twoSum(testArrays.invalid.singleArg, 11);
		expect(result).toBeNull();
	});
	it("Return the array of numbers if the pair is found", () => {
		const result = twoSum(testArrays.valid.normal, 11);
		expect(Array.isArray(result)).toBe(true);
		expect(result?.length).toBe(2);
	});
});

describe("Two Sum Function  Map Approach", () => {
	it("Return null if the function does not find a valid pair", () => {
		const result = twoSumMap(testArrays.invalid.noPair, 11);
		expect(result).toBeNull();
	});

	it("Return null if the array is empty", () => {
		const result = twoSumMap(testArrays.invalid.empty, 11);
		expect(result).toBeNull();
	});
	it("Return null if the array has less than two elements", () => {
		const result = twoSumMap(testArrays.invalid.singleArg, 11);
		expect(result).toBeNull();
	});
	it("Return the array of numbers if the pair is found", () => {
		const result = twoSumMap(testArrays.valid.normal, 11);
		expect(Array.isArray(result)).toBe(true);
		expect(result?.length).toBe(2);
	});
	it("Return the array of numbers indexes if the pair is found and the numbers values are the same", () => {
		const result = twoSumMap(testArrays.valid.sameNumbers, 6);
		expect(Array.isArray(result)).toBe(true);
		expect(result?.length).toBe(2);
	});
});
