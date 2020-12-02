const vertical = (letters) => {
  let result = [];
  for (const i in letters[0]) {
    result.push([]);
    for (const o in letters){
      result[i].push(letters[o][i]);
    }
  };
  return result;
}

const backward = (word) => {
  return word.split('')
      .map((val, ind, arr) => arr[(arr.length - 1) - ind])
      .join('');
}
/*
const diagonally = (letters) => {
  let result = [];
  let length = Math.max(letters.length, letters[0].length); // to get the longer side of the word search
  for (let o = 0; o < length; o++){
      for (let i = 0; i < length; i++) {
          result[o].push(letters[i+o][i]);
      }
  }
  for (let o = 0; o < length; o++){
      for (let i = 0; i < length; i++) {
          result[o + length].push(letters[i][i+o]);
      }
  }
  return result.filter((x) => x != undefined);
}
*/
const wordSearch = (letters, word) => { 
  const wordBackward = backward(word);
//    const diagona = diagonally(letters);
//    console.log(diagon)
  const verticalJoin = vertical(letters).map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
      if (l.includes(word) || l.includes(wordBackward)) return true;
  }
  for (l of verticalJoin) {
      if (l.includes(word) || l.includes(wordBackward)) return true;
  }
  return false;
}

module.exports = wordSearch;

//  0 1 2 3 4
//0[a,b,c,d,e] uhnde
//1[a,b,c,d,e] un 
//2[a,b,c,d,e] unde
//3[a,b,c,d,e]    < x.length 
//4[a,b,c,d,e] 0,0 > 1,1 > 2,2 > 3,3 > 4,4
//5[a,b,c,d,e]    
//
//5,0 4,1 3,2 
//
//

//[abcde]1
//[abcde]2
//[abcde]3
//[abcde]4
//[abcde]5
//ab

//[a]
//[a,b]
//[a,b,c]
//[b,c]
//[c]

//1[a,b,c,d,e] 
//2  [a,b,c,d,e] 
//3    [a,b,c,d,e]
//4       [a,b,c,d,e]
//5         [a,b,c,d,e] // check vertically

//1[a]
//2[a,b]
//3[a,b,c]
//4[a,b,c,d]
//5[a,b,c,d,e] // check vertically
//5  [b,c,d,e]
//5    [c,d,e]
//5      [d,e]
//5        [e]