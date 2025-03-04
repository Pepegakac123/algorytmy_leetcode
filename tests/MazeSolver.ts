import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "@std/expect";
import solve from "../recursion/mazeSolver.ts";

// Define Point interface if it's not already imported
interface Point {
	x: number;
	y: number;
}

function drawPath(data: string[], path: Point[]): string[] {
	const data2 = data.map((row) => row.split(""));
	// biome-ignore lint/complexity/noForEach: <explanation>
	path.forEach((p) => {
		if (data2[p.y] && data2[p.y][p.x]) {
			data2[p.y][p.x] = "*";
		}
	});
	return data2.map((d) => d.join(""));
}

describe("Maze Solver", () => {
	it("should find the correct path through the maze", () => {
		const maze = [
			"xxxxxxxxxx x",
			"x        x x",
			"x        x x",
			"x xxxxxxxx x",
			"x          x",
			"x xxxxxxxxxx",
		];

		const mazeResult = [
			{ x: 10, y: 0 },
			{ x: 10, y: 1 },
			{ x: 10, y: 2 },
			{ x: 10, y: 3 },
			{ x: 10, y: 4 },
			{ x: 9, y: 4 },
			{ x: 8, y: 4 },
			{ x: 7, y: 4 },
			{ x: 6, y: 4 },
			{ x: 5, y: 4 },
			{ x: 4, y: 4 },
			{ x: 3, y: 4 },
			{ x: 2, y: 4 },
			{ x: 1, y: 4 },
			{ x: 1, y: 5 },
		];

		// there is only one path through
		const result = solve(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 });
		expect(drawPath(maze, result)).toEqual(drawPath(maze, mazeResult));
	});
});
