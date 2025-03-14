// CompareBinaryTrees.test.ts
import { tree, tree2 } from "./tree.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import compare from "../dataStructures/compareBinaryTrees.ts";

describe("Compare Binary Trees", () => {
	it("should correctly compare two binary trees", () => {
		expect(compare(tree, tree)).toBe(true);
		expect(compare(tree, tree2)).toBe(false);
	});
});
