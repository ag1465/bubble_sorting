describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([3, 1, 10, 5])).toEqual([[3, 1],[10, 5]]);
  });
  // it('is able to split an array into two halves', function() {
  //   // your code here
  //   expect(split([3, 1, 10, 5])).toEqual([[[3],[1]],[[10], [5]]]);
  // });
});
describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([1,3],[5,10])).toEqual([1,3,5,10]);
  });
});
describe('Mergesort function', function(){
  it('is able to merge and sort arrays into one sorted array', function(){
    // test the merging algorithm
    expect(mergeSort([5,10,1,3])).toEqual([1,3,5,10]);
  });
});
