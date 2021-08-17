function rotateArray(arr, k) {
  // type your code here

  if(k === arr.length || arr.length === 0){
    return arr
  } else {
    for(i = 0; i < k; i++){
      let popped = arr.pop()
      arr.unshift(popped)
    }
  }

  return arr

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("[7, 8, 9, 10, 1, 2, 3, 4, 5, 6]");
  console.log("=>", rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]");
  console.log("=>", rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
  // if k is equal to array length or array is empty
    // return array
  // otherwise
    // k times: 
      // pop the last element off the array
      // unshift it back to the front of the array
  // return the now-shifted array
  
// And a written explanation of your solution
