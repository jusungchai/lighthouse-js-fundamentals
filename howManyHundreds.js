function howManyHundreds(numOfBottles){
  let count = 0;
  while (numOfBottles >= 100){
    count++;
    numOfBottles -= 100;
  }
  return count;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);