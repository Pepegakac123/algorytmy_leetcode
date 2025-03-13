import { bfs } from "../path/to/BTBFS.ts";
import { tree } from "./tree.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

describe("Binary Tree Breadth-First Search", () => {
	it("should correctly determine if values exist in the tree", () => {
		expect(bfs(tree, 45)).toBe(true);
		expect(bfs(tree, 7)).toBe(true);
		expect(bfs(tree, 69)).toBe(false);
	});
});
