class Queue<T> {
	private in:T[] = [];
	private out:T[]= [];

	constructor (arr: T[] = []) {
		arr.forEach((i)=> {this.enqueue(i)})
	}

	public enqueue (elem: T): void {
		this.in.push(elem);
	}

	public dequeue (): T | undefined {
		if(this.out.length === 0) {
			while (this.in.length) {
				const elem = this.in.pop() as T;
				this.out.push(elem);
			}
		}

		return this.out.pop();
	}

	public get size () {
		return this.in.length + this.out.length
	}

	public readonly at = (index: number): T | undefined => {
    if (index < 0) {
      throw new Error('Index is lower than 0');
    }

    if (this.size < index) {
      return undefined;
    }

    if (this.out.length && index < this.out.length) {
      return this.out.at(this.out.length - 1 - index);
    }

    return this.in.at(index - this.out.length);
  };

	public * [Symbol.iterator] (): Iterator<T> {
		 const copy: T[] = [];

    for (let i = 0; i < this.size; i++) {
      copy.push(this.at(i) as T);
    }

    for (let i = 0; i < this.size; i++) {
      yield copy[i];
    }
	}
}

export default Queue;