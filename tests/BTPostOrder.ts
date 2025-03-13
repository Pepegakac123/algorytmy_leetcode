import post_order_search from "../dataStructures/btPostOrder.ts";
import { tree } from "./tree.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

describe("Binary Tree Post-Order Traversal", () => {
	it("should return nodes in the correct order", () => {
		expect(post_order_search(tree)).toEqual([
			7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
		]);
	});
});
