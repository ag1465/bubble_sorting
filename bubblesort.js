function bubbleSort(array) {
  /* your code here */
  let count = array.length-1

  while(count > 0){
    for(let i = 0; i <= count-1; i++){
      //When 1st larger than 2nd
      if(array[i] > array[i+1]){
        let arrval = array[i+1]
        array[i+1] = array[i]
        array[i] = arrval
      }
    }
    count--;
  }
  return array
}
const TestArr = [6, 25, 1, 5, 8, 10, 3]
// console.log(bubbleSort(TestArr))
