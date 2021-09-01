function arrayOfProducts(array) {
	let newArr = []
	let product;
  while (newArr.length <= array.length) {
		product = 1;
		for (let i = 0; i < 3; i++) {
			product*= array[i]
			console.log(product)

		}
        newArr.push(product)
	}
    console.log(newArr)
}


let test1 = [1, 8, 6, 2, 4]
arrayOfProducts(test1)
