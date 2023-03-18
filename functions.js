
function firstLetterName(name) {
    const firstLetter = name[0]; // Get the first letter of the name
    alert(`The name ${name} starts with the letter ${firstLetter}`);
  }
  
 
  function divisibleByTwo(number) {
    if (number % 2 === 0) {
      return true; // The number is even
    } else {
      return false; // The number is odd
    }
  }
  
 
  function largestNum(arr) {
    let largest = arr[0]; // Assume the first element is the largest
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]; // Update the largest variable if a larger number is found
      }
    }
    return largest;
  }
  
  
  const name = prompt("Please enter your name:");
  
  
  firstLetterName(name);
  
  
  const number = parseInt(prompt("Please enter a number:"));
  
  
  const isEven = divisibleByTwo(number);
  if (isEven) {
    console.log(`The number ${number} is divisible by two.`);
  } else {
    console.log(`The number ${number} is not divisible by two.`);
  }
  

  const numbers = [5, 2, 9, 3, 8];
  const largestNumber = largestNum(numbers);
  console.log(largestNumber);
  