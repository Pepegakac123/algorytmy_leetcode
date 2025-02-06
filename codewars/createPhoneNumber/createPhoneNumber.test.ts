import { describe, it } from "@std/testing";
import { expect } from "jsr:@std/expect";
import { createPhoneNumber } from "./createPhoneNumber.ts";

describe("Basic tests", () => {
	it("Should format numbers correctly", () => {
		expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(
			"(123) 456-7890",
		);
	});

	it("Should handle repeated numbers", () => {
		expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual(
			"(111) 111-1111",
		);
	});

	it("Should maintain consistent formatting", () => {
		expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(
			"(123) 456-7890",
		);
	});
});
