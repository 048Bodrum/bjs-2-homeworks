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
	let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item) => acc + item, 0) / users.filter(user => user.gender === gender).length;
	if (users.filter(user => user.gender === gender).length === 0) {
		return 0;
	}
	return result;
}

