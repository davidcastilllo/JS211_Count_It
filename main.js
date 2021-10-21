let sort = () => {
 /*Below the code is filtering out anything thats not a letter*/
 let temp = document.getElementById('userInput').value.split('')
 let listToSort=[]
 temp.forEach(e => {
  if (/[a-zA-Z]+$/.test(e)) {
   listToSort.push(e)
  }
 });

 /*Below is couting each occurence of the letters*/

 let word = listToSort.join('')
 let Count = {}
 
 for (let i = 0; i < word.length; i++) {
   let letter = word[i]
   let vara = Count[letter]
   if (!vara) {
     Count[letter] = 1
   }
   else {
     Count[letter] = vara + 1
   }
  }
 console.log(Count)

  /*Lastly we are converting an object to observable date that we can display on the DOM*/

 let str = JSON.stringify(Count).split(',').join('  ')
 let div = document.getElementById('sorted') 
 div.innerHTML = ''
 div.append(str)
document.body.appendChild(div)
}



