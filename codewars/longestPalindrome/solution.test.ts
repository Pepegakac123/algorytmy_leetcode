import { longestPalindrome } from "./solution.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "@std/expect";

describe("Longest Palindrome", () => {
	it("should handle single character", () => {
		expect(longestPalindrome("B")).toBe(1);
	});

	it("should handle string with special characters", () => {
		expect(longestPalindrome("xyz__a_/b0110//a_zyx")).toBe(13);
	});

	it("should be case insensitive", () => {
		expect(longestPalindrome("$aaabbbccddd_!jJpqlQx_.///yYabababhii_")).toBe(
			25,
		);
	});
});
