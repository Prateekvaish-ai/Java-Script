const nums = [3, 7, 9, 4, 1, 8];

const NewNums = nums.map((n) => {return n*10 });
console.log(NewNums);


const prices = [33, 45.99, 270, 2300, 120];

console.log(50 * 1.18);
console.log(50 * 0.18 + 50);

const NewPrices = prices.map((p) => {return p* 1.18 });
console.log(NewPrices);

const evenNums = nums.filter((n) => {return n % 2 === 0 });
console.log(evenNums);


