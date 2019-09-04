function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  let mid = Math.ceil(wholeArray.length/2);
  if(wholeArray.length > 1){
    const firstHalf = wholeArray.slice(0, mid)
    const secondHalf = wholeArray.slice(mid)
    return [firstHalf, secondHalf];
  }else {
    return [wholeArray]
  }
}
function merge(array1,array2){
  let arr = []
  while(array1.length > 0 && array2.length > 0){
    if(array1[0] < array2[0]){
      arr.push(array1[0])
      array1.shift()
    } else {
      arr.push(array2[0])
      array2.shift()
    }
  }
  arr = [...arr,... array1, ...array2]
  // console.log(arr)
  return arr;
}
function mergeSort(array) {
  /* your code here */
  if(array.length > 1){
    let [left, right] = split(array)
    return merge(mergeSort(left), mergeSort(right))
  }else{
    return array
  }
}
