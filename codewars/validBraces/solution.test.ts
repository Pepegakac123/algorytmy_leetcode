import { validBraces } from "./solution.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "@std/expect";

describe("Valid Braces", () => {
	it("should handle basic tests", () => {
		expect(validBraces("()")).toBe(true);
		expect(validBraces("[(])")).toBe(false);
	});

	// Możemy dodać więcej przypadków testowych
	it("should handle complex cases", () => {
		expect(validBraces("(){}[]")).toBe(true);
		expect(validBraces("([{}])")).toBe(true);
		expect(validBraces("(}")).toBe(false);
		expect(validBraces("[(])")).toBe(false);
		expect(validBraces("[({})](]")).toBe(false);
	});

	it("should handle empty string", () => {
		expect(validBraces("")).toBe(true);
	});
});
