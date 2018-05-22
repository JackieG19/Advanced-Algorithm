
function pairwise(arr, arg) {
  var total = 0;
  var checkIndex = [];
  for(var i = 0; i < arr.length; i++){
    for(var b = i + 1; b < arr.length; b++){
      if(arr[i]+arr[b]===arg && checkIndex.indexof(i)==-1 && checkIndex.indexof(b)==-1){
        checkIndex.push(i);
        checkIndex.push(b);
        total+=i+b;
      }
    }
  }
  return total;//arg;
}

//pairwise([1,4,2,3,0,5], 7);

