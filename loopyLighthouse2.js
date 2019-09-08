function loopyLighthouse (range, multiples, words){
  let start = range[0];
  let end = range[1];
  let multiple1 = multiples[0];
  let multiple2 = multiples[1];
  let word1 = words[0];
  let word2 = words[1];

  for (start; start <= end; start++){
    if (start % multiple1 === 0 && start % multiple2 === 0){
      console.log(word1 + word2);
    }
    else if (start % multiple1 === 0){
      console.log(word1);
    }
    else if (start % multiple2 === 0){
      console.log(word2);
    }
    else{
      console.log(start);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);