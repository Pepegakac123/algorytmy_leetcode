import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "@std/expect";
import { twoCrystalBalls } from "../Search/TwoCrystalBalls.ts";

describe("Two Crystal Balls Problem", () => {
	it("should find the breaking point correctly", () => {
		let idx = Math.floor(Math.random() * 10000);
		const data = new Array(10000).fill(false);

		// Wypełnij tablicę wartościami true od indeksu idx
		for (let i = idx; i < 10000; ++i) {
			data[i] = true;
		}

		expect(twoCrystalBalls(data)).toEqual(idx);
	});

	it("should return -1 when no breaking point exists", () => {
		expect(twoCrystalBalls(new Array(821).fill(false))).toEqual(-1);
	});
});
