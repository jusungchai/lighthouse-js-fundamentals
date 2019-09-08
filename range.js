function range (start, end, step){
  let arr = [];
  if (start == undefined || end == undefined || step == undefined || start > end || step <= 0){
    return arr;
  }  
  else{
    for (start; start <= end; start += step){
      arr.push(start);      
    }
  }
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));