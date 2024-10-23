// Function to calculate the sum of numbers from 10 to 50
function sumNumbers(start, end) {
    let sum = 0;
    
    // Loop through each number from start to end
    for (let i = start; i <= end; i++) {
        sum += i;  // Add the current number to sum
    }

    return sum;
}

// Example usage
const start = 10;
const end = 50;
const totalSum = sumNumbers(start, end);

console.log(`The sum of numbers from ${start} to ${end} is: ${totalSum}`);
