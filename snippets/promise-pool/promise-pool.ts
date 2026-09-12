import Queue from '../queue/queue'

const promisePool = async ({urls, count}: {urls: string[], count: number}) => {
	const queue = new Queue(urls); // 20

	const shrek = async () => {
		while (queue.size > 0) {
			const url = queue.dequeue() as string;

			await fetch(url);
		}
	}

	const shrekArr: Promise<void>[] = [];

	for(let i = 0; i < count; i++) {
		shrekArr.push(shrek());
	}

	await Promise.all(shrekArr);
}

export default promisePool