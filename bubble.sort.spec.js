describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('expect sort', function() {
    expect( bubbleSort([6, 25, 1, 5, 8, 10, 3])).toEqual([1, 3, 5, 6, 8, 10, 25]);
  })
  it('expect sort', function() {
    let testArr = [4, 78, 35, 20, 34, 10, 14, 23, 4, 56, 23, 3, 4, 23, 13, 1]
    expect( bubbleSort(testArr)).toEqual([1, 3, 4, 4, 4, 10, 13, 14, 20, 23, 23, 23, 34, 35, 56, 78]);
  })
});
