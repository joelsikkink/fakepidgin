function fakepidgin(words){
  let normalEng = words;
  let addWord = ["Eh brah,"];
  pidginArray = _.map(addWord,function(addWord, words){return addWord + words});
  return pidginArray;
}

console.log(fakepidgin(['would you like to eat?', 'no thank you.']));