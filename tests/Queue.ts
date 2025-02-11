import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "@std/expect/expect";
import Queue from "../dataStructures/Queue.ts";

describe("Queue", () => {
	it("should handle basic queue operations", () => {
		const queue = new Queue<number>();

		// Test enqueue operations
		queue.enqueue(5);
		queue.enqueue(7);
		queue.enqueue(9);

		// Test dequeue and length
		expect(queue.deque()).toEqual(5);
		expect(queue.length).toEqual(2);

		// Test additional enqueue and dequeue operations
		queue.enqueue(11);
		expect(queue.deque()).toEqual(7);
		expect(queue.deque()).toEqual(9);

		// Test peek operation
		expect(queue.peek()).toEqual(11);

		// Test dequeue until empty
		expect(queue.deque()).toEqual(11);
		expect(queue.deque()).toEqual(undefined);
		expect(queue.length).toEqual(0);
	});

	it("should handle operations after emptying queue", () => {
		const queue = new Queue<number>();

		// Test enqueue after empty
		queue.enqueue(69);
		expect(queue.peek()).toEqual(69);
		expect(queue.length).toEqual(1);
	});

	it("should handle empty queue operations", () => {
		const queue = new Queue<number>();

		expect(queue.deque()).toEqual(undefined);
		expect(queue.peek()).toEqual(undefined);
		expect(queue.length).toEqual(0);
	});
});
