import in_order_search from "../dataStructures/btInOrder.ts";
import { tree } from "./tree.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

describe("Binary Tree In-Order Traversal", () => {
	it("should return nodes in the correct order", () => {
		expect(in_order_search(tree)).toEqual([
			5, 7, 10, 15, 20, 29, 30, 45, 50, 100,
		]);
	});
});
