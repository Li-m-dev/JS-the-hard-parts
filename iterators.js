// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
  // YOUR CODE HERE
	for(let i = 0; i < arr.length; i++) {
    return arr.reduce((acc, curr) => acc + curr)
  }
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  // YOUR CODE HERE
	let i = 0;
  function inner() {
    const element = arr[i]
    i++;
    return element
  }
  return inner
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
	function inner () {
    const element = arr[i]
    i++;
    return element
    
  }
  return {next: inner};
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
  let total = 0;
  let curr = nextIterator(arr);
  for(let i = 0; i < arr.length; i++) {
   total += curr.next() 
  }
	return total
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
  // YOUR CODE HERE
// 	let i = 0;
//   console.log(...set)
//   let arr = [...set]
// 	function inner () {
//     const element = arr[i]
//     i++;
//     return element
    
//   }
//   return {next: inner};
  
  let it = set.values();
//   console.log(set.values)
//   console.log(it.next())
  function inner() {
//     console.log(it.next())
    return it.next().value
  }
  return {next: inner}
}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
		function inner () {
    const element = arr[i]
    i++;
    return [i, element]
    
  }
  return {next: inner}
}

// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE

}

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){
    let i = 0;
    function inner () {
       i++;
      if(i === 1) {
        return `${array[i-1]} is the first`;
      }
     
      if(i > 1){
        return `${array[i-1]} was found after index ${i-2}`
      }
    }
 
  return{sentence: inner};
}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {
yield setInterval(()=> {
	if(string === 'english') {
	console.log("hello there")
}else{
	console.log("gibberish")
}
},3000)


}

 console.log(createConversation('english').next());
// console.log(createConversation('jenglish').next());



//CHALLENGE 9
function waitForVerb(noun) {

}

async function f(noun) {

}

f("dog");

