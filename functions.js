function addNums(a, b){

    var c = a + b;

    console.log(c);

}

addNums(3220, 48);



const factorial = (n) => {

    let f = 1;
    for(let i=2; i<=n; i++){
        f = f * i;
    }
    return f;
}

const ans = factorial(5);
console.log(ans);

// create a function to check if a number is even or odd

const checkEven = (n) => {
    if (n % 2 === 0){
        return 'even'
    }else{
        return 'odd'
    }
}

const res = checkEven(7);
console.log(res);

// create a function to take time of the day great according

const greet = (time) => {
    if (time === 'morning'){
        return 'Good morning';
    }else if (time === 'noon'){
        return 'Good noon';
    }else if (time === 'afternoon'){
        return 'Good afternoon';
    }else if (time === 'evening'){
        return 'Good evening';
    }else if (time === 'night'){
        return 'Good night';
    }
}

if (greet) time ()