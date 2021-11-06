module.exports = class {
	constructor(initArray)
	{
		this.items = [];

		if (Array.isArray(initArray))
		{
			for(let i = 0; i < initArray.length; i++) {
				const item = initArray[i];
				this.add(item);
			}
		}
	}

	add = (item) => {
		if (!this.has(item)) {
			this.items.push(item);
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
		const key = this.items.indexOf(data);
		this.items.splice(key, 1);
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

	[Symbol.toStringTag] = '^_^';
}