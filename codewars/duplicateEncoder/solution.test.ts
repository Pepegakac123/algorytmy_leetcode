import { describe, it } from "@std/testing";
import { expect } from "jsr:@std/expect";
import { duplicateEncode } from "./solution.ts";

describe("Basic tests", () => {
	it("Should encode single characters as (", () => {
		expect(duplicateEncode("din")).toEqual("(((");
	});

	it("Should encode repeated characters as )", () => {
		expect(duplicateEncode("recede")).toEqual("()()()");
	});

	it("Should ignore case when encoding", () => {
		expect(duplicateEncode("Success")).toEqual(")())())");
	});

	it("Should handle special characters", () => {
		expect(duplicateEncode("(( @")).toEqual("))((");
	});
});
