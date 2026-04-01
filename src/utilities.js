const areAllObjectArraysEmpty = (arr) => {
	return arr.every(obj => Object.values(obj).every(val => Array.isArray(val) && val.length === 0));
}


export default areAllObjectArraysEmpty;