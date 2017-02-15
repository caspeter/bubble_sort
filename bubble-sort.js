function bubbleSort(array){
  if(array.length < 2){
    return array;
  }
  var done = false;
  while (done === false){
    done = true;
    for(var i=1; i<array.length; i++){
      if(array[i-1] > array[i]){
        done = false;
        [array[i-1], array[i]] = [array[i], array[i-1]];
      }
    }
  }
  return array
}

console.log(bubbleSort([4,3,6,8,23,5,7,32]))
console.log(bubbleSort([4]))
