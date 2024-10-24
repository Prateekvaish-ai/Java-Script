const prices2 = ['34.56', '123.99', '89.7', '77.228'];
// [34, 123, 89, 77]

console.log( parseInt('34.56'.slice(1)));

const intPrices = prices2.map((p) => { return parseInt(p.slice(1))});

