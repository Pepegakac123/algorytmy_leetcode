import { describe, it } from "@std/testing";
import { expect } from "jsr:@std/expect";
import { findContainer, maxAreaTwoPointers } from "./ContainerWithMostWater.ts";

const testArrays = {
	valid: {
		first: [7, 1, 2, 3, 9],
		second: [6, 9, 3, 4, 5, 8],
	},
	invalid: {
		empty: [],
		singleArg: [5],
	},
};

describe("findContainer", () => {
	it("Should Return A Null If the array is empty", () => {
		const result = findContainer(testArrays.invalid.empty);
		expect(result).toEqual(0);
	});
	it("Should Return A Null If the array has less than 2 args", () => {
		const result = findContainer(testArrays.invalid.singleArg);
		expect(result).toEqual(0);
	});
	it("Should Return A Correct Value of 28 from the first Array", () => {
		const result = findContainer(testArrays.valid.first);
		expect(result).toEqual(28);
	});
	it("Should Return A Correct Value of 32 from the second array", () => {
		const result = findContainer(testArrays.valid.second);
		expect(result).toEqual(32);
	});
});

describe("MaxAreaTwoPointersTechnique", () => {
	it("Should Return A Null If the array is empty", () => {
		const result = maxAreaTwoPointers(testArrays.invalid.empty);
		expect(result).toEqual(0);
	});
	it("Should Return A Null If the array has less than 2 args", () => {
		const result = maxAreaTwoPointers(testArrays.invalid.singleArg);
		expect(result).toEqual(0);
	});
	it("Should Return A Correct Value of 28 from the first Array", () => {
		const result = maxAreaTwoPointers(testArrays.valid.first);
		expect(result).toEqual(28);
	});
	it("Should Return A Correct Value of 32 from the second array", () => {
		const result = maxAreaTwoPointers(testArrays.valid.second);
		expect(result).toEqual(32);
	});
});
