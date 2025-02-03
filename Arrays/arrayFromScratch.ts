class MyArray<T> {
	length: number;
	data: Record<number, T>;
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index: number) {
		return this.data[index];
	}
	push(item: T): number {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}
	pop(): T {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index: number): T {
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index: number): void {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new MyArray<string>();
newArray.push("h1");
newArray.push("you");
newArray.push("are");
newArray.push("!");
newArray.push("fun");
newArray.delete(3);
newArray.push("!");
console.log(newArray);
