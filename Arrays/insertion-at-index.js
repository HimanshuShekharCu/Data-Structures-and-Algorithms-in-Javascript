let arr = [1, 2, 3, 4, 5],
  element = 90;
function insertAtIndex(arr, index, element) {
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
    arr[i] = element;
  }
  return arr;
}
console.log(insertAtIndex(arr, 2, element));
