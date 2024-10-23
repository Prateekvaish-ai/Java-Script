// Function to check if a number is a perfect square
function isPerfectSquare(num) {
    if (num < 0) {
        return false; // Negative numbers cannot be perfect squares
    }

    // Calculate the square root of the number
    const sqrt = Math.sqrt(num);

    // Check if the square root is an integer
    return sqrt === Math.floor(sqrt);
}

// Example usage
const number = 25;
if (isPerfectSquare(number)) {
    console.log(`${number} is a perfect square.`);
} else {
    console.log(`${number} is not a perfect square.`);
}
