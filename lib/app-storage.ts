enum AppStorageKey {
	ACCESS_TOKEN = 'ACCESS_TOKEN',
}

const appStorage = () => {
	if (typeof window !== 'undefined') {
		return window.localStorage;
	}
	return null;
};
const setItem = (key: keyof typeof AppStorageKey, value: unknown) => {
	const storage = appStorage();
	if (storage) {
		storage.setItem(AppStorageKey[key], JSON.stringify(value));
	}
};

const getItem = <T>(key: keyof typeof AppStorageKey) => {
	const storage = appStorage();
	if (storage) {
		const item = storage.getItem(AppStorageKey[key]);
		return item ? (JSON.parse(item) as T) : null;
	}
	return null;
};

const removeItem = (key: keyof typeof AppStorageKey) => {
	const storage = appStorage();
	if (storage) {
		storage.removeItem(AppStorageKey[key]);
	}
};

export {setItem, getItem, removeItem};
