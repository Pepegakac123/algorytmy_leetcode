import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "@std/expect";
import { betterOrder, order } from "./solution.ts";

describe("Basic tests", () => {
	it("Should correctly order words with numbers", () => {
		expect(order("is2 Thi1s T4est 3a")).toEqual("Thi1s is2 3a T4est");
	});

	it("Should handle longer sentences", () => {
		expect(order("4of Fo1r pe6ople g3ood th5e the2")).toEqual(
			"Fo1r the2 g3ood 4of th5e pe6ople",
		);
	});

	it("Should return empty string for empty input", () => {
		expect(order("")).toEqual("");
	});
});
