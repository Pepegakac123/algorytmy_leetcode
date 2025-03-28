import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "@std/expect";
import quickSort from "../Sort/quickSort.ts";

describe("Quick Sort", () => {
	it("should sort array in ascending order", () => {
		const arr = [9, 3, 7, 4, 69, 420, 42];
		quickSort(arr);
		expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
	});

	it("should handle empty array", () => {
		const arr: number[] = [];
		quickSort(arr);
		expect(arr).toEqual([]);
	});

	it("should handle array with one element", () => {
		const arr = [1];
		quickSort(arr);
		expect(arr).toEqual([1]);
	});
});
