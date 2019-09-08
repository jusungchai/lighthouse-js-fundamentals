function merge (arr1, arr2){
  let returnArray = [];

  while (arr1.length > 0 && arr2.length > 0){
    if (arr1[0] <= arr2[0]){
      returnArray.push(arr1[0]);
      arr1.shift();
    }    
    if (arr2[0] <= arr1[0]){
      returnArray.push(arr2[0]);
      arr2.shift();
    }
  }

  while (arr1.length > 0){
    returnArray.push(arr1[0]);
    arr1.shift();
  }

  while (arr2.length > 0){
    returnArray.push(arr2[0]);
    arr2.shift();
  }

  return returnArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);