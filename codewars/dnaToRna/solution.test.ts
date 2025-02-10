import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { DNAtoRNA } from "./solution.ts";

describe("Basic tests", () => {
	it("Should convert all T to U", () => {
		expect(DNAtoRNA("TTTT")).toEqual("UUUU");
	});

	it("Should convert mixed sequence correctly", () => {
		expect(DNAtoRNA("GCAT")).toEqual("GCAU");
	});

	it("Should handle sequence without T", () => {
		expect(DNAtoRNA("GACCGCCGCC")).toEqual("GACCGCCGCC");
	});
});
