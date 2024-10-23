// Function to reverse a number
function reverseNumber(num) {
    // Convert the number to a string, split it into an array of characters, reverse the array, and join it back into a string
    const reversedString = num.toString().split('').reverse().join('');
    
    // Convert the reversed string back to a number
    const reversedNumber = parseInt(reversedString);
    
    // Return the reversed number
    return reversedNumber;
}

// Example usage
const number = 12345;
const reversed = reverseNumber(number);
console.log(`Reversed Number: ${reversed}`);
