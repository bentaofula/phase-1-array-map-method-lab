const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(item){
    let splititem = item.split(" ")
    let capslock = splititem.map (splititem => splititem.charAt(0).toUpperCase() + splititem.slice(1))
    let returnedArray = capslock.join(" ");
    console.log(returnedArray);
    return returnedArray;
  })

}
titleCased();