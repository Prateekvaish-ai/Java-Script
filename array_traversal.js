const nums = [4, 87, 9, 3, 2, 1];

console.log('array traversal 1');
for (let i= 0; i < nums.length; i++){
    console.log(nums[i]);
};

console.log('array traversal 2');

for( let n of nums ){
    console.log(n);
}

console.log('array traversal 3');

nums.forEach((a) => {
    console.log(a);
})


nums.forEach((n) => {
    if (n % 2 === 0) {
    console.log(n);
    }
    } );

    nums.forEach((n) => {
            console.log(n**2);
        }
    );

    // WAP to add all odd numbers in a new array

    const oddNums = [];

    nums.forEach((n) => {
        if (n % 2 !== 0){
            oddNums.push(n);
        }
    });

    console.log(oddNums);

    // WAP to multiple every by 10 and store in a new array 

    const NewNums = [];

    nums.forEach((n) => {
         (n * 10);
            NewNums.push(n);
        }
    );

    console.log(NewNums);