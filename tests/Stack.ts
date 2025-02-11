import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "@std/expect";
import Stack from "../dataStructures/Stack.ts";

describe("Stack", () => {
	it("should handle basic stack operations", () => {
		const stack = new Stack<number>();

		// Test push operations
		stack.push(5);
		stack.push(7);
		stack.push(9);

		// Test pop and length
		expect(stack.pop()).toEqual(9);
		expect(stack.length).toEqual(2);

		// Test additional push and pop operations
		stack.push(11);
		expect(stack.pop()).toEqual(11);
		expect(stack.pop()).toEqual(7);

		// Test peek operation
		expect(stack.peek()).toEqual(5);

		// Test pop until empty
		expect(stack.pop()).toEqual(5);
		expect(stack.pop()).toEqual(undefined);
	});

	it("should handle operations after emptying stack", () => {
		const stack = new Stack<number>();

		// Push after empty
		stack.push(69);
		expect(stack.peek()).toEqual(69);
		expect(stack.length).toEqual(1);
	});

	it("should handle empty stack operations", () => {
		const stack = new Stack<number>();

		expect(stack.pop()).toEqual(undefined);
		expect(stack.peek()).toEqual(undefined);
		expect(stack.length).toEqual(0);
	});
});
