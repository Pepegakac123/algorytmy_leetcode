type Node<T> = {
	value: T;
	prev?: Node<T>;
	next?: Node<T>;
};

export default class DoublyLinkedList<T> {
	public length: number;
	private head?: Node<T>;
	private tail?: Node<T>;

	constructor() {
		this.length = 0;
		this.head = undefined;
		this.tail = undefined;
	}

	prepend(item: T): void {
		const node = { value: item } as Node<T>;

		this.length++;
		if (!this.head) {
			this.head = this.tail = node;
			return;
		}
		node.next = this.head;
		this.head.prev = node;
		this.head = node;
		node.prev = undefined;
	}
	insertAt(item: T, idx: number): void {
		if (idx > this.length) {
			throw new Error("Index out of bounds");
		}
		if (idx === this.length) {
			this.append(item);
			return;
		}
		if (idx === 0) {
			this.prepend(item);
			return;
		}

		this.length++;
		let curr = this.head;
		for (let i = 0; i < idx && curr; ++i) {
			curr = curr.next;
		}
		curr = curr as Node<T>;
		const node = { value: item } as Node<T>;

		node.next = curr;
		node.prev = curr.prev;
		curr.prev = node;

		if (node.prev) {
			node.prev.next = node;
		}
	}
	append(item: T): void {
		this.length++;
		const node = { value: item } as Node<T>;
		if (!this.tail) {
			this.head = this.tail = node;
			return;
		}
		node.prev = this.tail;
		this.tail.next = node;
		this.tail = node;
	}
	remove(item: T): T | undefined {
		let curr = this.head;
		for (let i = 0; i < this.length && curr; ++i) {
			if (curr.value === item) {
				break;
			}
			curr = curr.next;
		}
		if (!curr) {
			return undefined;
		}
		return this.removeNode(curr);
	}
	get(idx: number): T | undefined {
		let curr = this.head;
		for (let i = 0; i < idx && curr; ++i) {
			curr = curr.next;
		}
		return curr?.value;
	}
	removeAt(idx: number): T | undefined {
		let curr = this.head;
		for (let i = 0; i < idx && curr; ++i) {
			curr = curr.next;
		}
		if (!curr) return undefined;
		return this.removeNode(curr);
	}

	private removeNode(node: Node<T>): T | undefined {
		this.length--;
		if (this.length === 0) {
			const out = this.head?.value;
			this.head = this.tail = undefined;
			return out;
		}

		if (node.prev) {
			node.prev.next = node.next;
		}
		if (node.next) {
			node.next.prev = node.prev;
		}

		if (node === this.head) {
			this.head = node.next;
		}
		if (node === this.tail) {
			this.tail = node.prev;
		}
		node.prev = node.next = undefined;
		return node.value;
	}
}
