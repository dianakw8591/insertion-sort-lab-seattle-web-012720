function findMinAndRemove(array){
  let min = array[0];
  let index = 0;
  array.forEach((elem, i) => {
    if (elem < min) {
      min = elem;
      index = i;
    }
  })
  array.splice(index, 1);
  return min
}

function insertionSort(array){
  let sorted = [];
  while (array.length > 0) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
