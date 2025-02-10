import { LinearSearch } from "../Search/linearSearchList.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

it("linear search array", () => {
	const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
	expect(LinearSearch(foo, 69)).toEqual(true);
	expect(LinearSearch(foo, 1336)).toEqual(false);
	expect(LinearSearch(foo, 69420)).toEqual(true);
	expect(LinearSearch(foo, 69421)).toEqual(false);
	expect(LinearSearch(foo, 1)).toEqual(true);
	expect(LinearSearch(foo, 0)).toEqual(false);
});
