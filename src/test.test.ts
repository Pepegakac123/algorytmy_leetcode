import { sum } from "./test";
import { describe, expect, it } from "vitest";

describe("sum function", () => {
	it("should add two numbers", () => {
		expect(sum(1, 2)).toBe(3);
	});
});
