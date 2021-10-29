function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  //var unsorted = [23, 45, 16, 37, 3, 99, 22];
  //var sorted = quicksort(unsorted);
  
 // console.log('Sorted array', sorted);
  

	// Create an array of string
	var stringArray = ["1024state", "763county", "435dma", "234state", "100state","297county","4dma","987dma"];

	// Create an empty array of number
	var numberArray = [];

	// Store length of array of string
	// in variable length
	length = stringArray.length;

	// Iterate through array of string using
	// for loop
	// push all elements of array of string
	// in array of numbers by typecasting
	// them to integers using parseInt function
	for (var i = 0; i < length; i++)

		// Instead of parseInt(), Number()
		// can also be used
		numberArray.push(parseInt(stringArray[i]));

	// Print the array of numbers
//	console.log(numberArray);
  var sorted2=quicksort(numberArray);
  console.log('Sorted Array',sorted2);


