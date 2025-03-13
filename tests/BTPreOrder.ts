// BTPreOrder.test.ts
import pre_order_search from "../dataStructures/btPreOrder.ts";
import { tree } from "./tree.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

describe("Binary Tree Pre-Order Traversal", () => {
	it("should return nodes in the correct order", () => {
		expect(pre_order_search(tree)).toEqual([
			20, 10, 5, 7, 15, 50, 30, 29, 45, 100,
		]);
	});
});
