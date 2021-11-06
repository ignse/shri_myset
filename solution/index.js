module.exports = class {
	constructor(initArray)
	{
		this.seen = {};
		this.items = [];

		if (Array.isArray(initArray))
		{
			let j = 0;

			for(let i = 0; i < initArray.length; i++) {
				const item = initArray[i];
				const key = this.get_hash(item);
				if (!this.seen.hasOwnProperty(key)) {
					this.seen[key] = j;
					this.items[j] = item;
					j++;
				}
			}
		}
	}

	add = (item) => {
		const key = this.get_hash(item);

		if (!this.seen.hasOwnProperty(key)) {
			const j = this.seen.length;
			this.seen[key] = j;
			this.items[j] = item;
		}

		return this;
	}

	entries = () => {
		return this.items.map(value => [value, value])[Symbol.iterator]();
	}

	clear = () => {
		this.items = [];
	}

	forEach = (callbackfn, thisArg) => {
		this.items.forEach(callbackfn, thisArg)
	}

	delete = (data) => {

		const key = this.get_hash(data);

		if (this.seen.hasOwnProperty(key)) {
			const arrKey = this.seen[key];
			this.items.splice(arrKey, 1);
			delete this.seen[key];
		}
	}

	keys = () => {
		return Object.values(this.items)[Symbol.iterator]();
	}

	values = () => {
		return this.keys();
	}

	has = (element) => {
		return this.items.includes(element);
	}

	get_hash = (item) => {
		const itemType = typeof item;
		return `${itemType}_${item}`;
	}

	get size() {
		return this.items.length;
	}

	[Symbol.iterator]() {
		return this.items.values();
	}
}