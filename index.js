let sizeOfArray = 6;
let arr = [1, 2, 3, 4, 5],
  element = 90;
function insertAtEnd(arr, sizeOfArray, element) {
  arr[sizeOfArray - 1] = element;
  return arr;
}
console.log(insertAtEnd(arr, sizeOfArray, element));
