import { tree } from "./tree.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import dfs from "../dataStructures/depthFirstSearch.ts";

describe("DFS on BST", () => {
	expect(dfs(tree, 45)).toEqual(true);
	expect(dfs(tree, 7)).toEqual(true);
	expect(dfs(tree, 69)).toEqual(false);
});
