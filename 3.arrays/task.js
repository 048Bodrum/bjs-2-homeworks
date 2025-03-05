function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((value, index) => {
		console.log(value, arr2[index]);
		return value === arr2[index];
	})
}



function getUsersNamesInAgeRange(users, gender) {
	let filterCount = 0;
	let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, ageItem) => acc + ageItem.age, 0) / filterCount;
	if (users.filter(user => user.gender === gender).length === 0) {
		return 0;
	}
	return result;
}

