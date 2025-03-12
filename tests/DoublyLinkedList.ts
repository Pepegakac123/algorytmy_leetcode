import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "@std/expect";
import LinkedList from "../dataStructures/LinkedList.ts";
describe("DoublyLinkedList", () => {
	it("should perform basic operations correctly", () => {
		// Setup a new list
		const list = new LinkedList<number>();

		// Test append operations
		list.append(5);
		list.append(7);
		list.append(9);

		// Test get operation
		expect(list.get(2)).toEqual(9);

		// Test removeAt operation
		expect(list.removeAt(1)).toEqual(7);
		expect(list.length).toEqual(2);

		// Test more operations in sequence
		list.append(11);
		expect(list.removeAt(1)).toEqual(9);
		expect(list.remove(9)).toEqual(undefined);
		expect(list.removeAt(0)).toEqual(5);
		expect(list.removeAt(0)).toEqual(11);
		expect(list.length).toEqual(0);

		// Test prepend operations
		list.prepend(5);
		list.prepend(7);
		list.prepend(9);

		// Test combined operations
		expect(list.get(2)).toEqual(5);
		expect(list.get(0)).toEqual(9);
		expect(list.remove(9)).toEqual(9);
		expect(list.length).toEqual(2);
		expect(list.get(0)).toEqual(7);
	});
});
