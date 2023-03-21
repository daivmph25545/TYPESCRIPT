// Bubble sort

function bubblesort<T>(arr: T[]): T[]{
    const length = arr.length
    for(let i = 0; i < length;i++){
        for(let j = 0; j < length - 1 - i;j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1] , arr[j]]
            }
        }
    }
    return arr
}

console.log(bubblesort([5,1,3,6,7]));

// Selection sort

function selectionSort<T>(array: T[]): T[] {
    const length = array.length;
    for (let i = 0; i < length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
    return array;
  }
  console.log(selectionSort([5,2,3,6,7,9,1]));

// Quick sort
function quickSort<T>(array: T[]): T[] {
    if (array.length <= 1) {
      return array;
    }
  
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];
  
    for (let i = 0; i < array.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  console.log(selectionSort([10,4,8,6,7,9,1]));





