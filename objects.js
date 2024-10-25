const user = { name : 'Raju', email : 'raju@mail.com', address : 'lucknow'};

console.log(user);

console.log(user.name);
console.log(user['email']);

user.password = 'abc123'
user.password = 'mumbai'

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand : 'samsung',
    model : 'Galaxy s23',
    price : 50000,
    colors : ['black', 'white', 'gray']
};

// access price of the smartphone 
// change price of smartphone to 42000
// access 2nd color of the smartphone
// update 1st color to 'red'
// add a new color

console.log(smartphone.price);

smartphone.price = '50000'
smartphone.price = '42000'

console.log(smartphone);

console.log(smartphone.price);

console.log(smartphone.colors);

smartphone.colors = 'black'
smartphone.colors = 'red'
console.log(smartphone);


const smartphoneArray = [
    {
        brand : 'Sumsung',
        model : 'Galaxy s23',
        price : 50000,
        colors : ['black', 'white', 'gray']
    },

    {
        brand : 'Apple',
        model : 'Iphone 16',
        price : 80000,
        colors : ['black', 'white', 'gray']
    },

    {
        brand : 'Poco',
        model : 'F1',
        price : 50000,
        colors : ['black', 'white', 'gray']
    },
    {
        brand : 'Realme',
        model : 'Narzo 70 turbo',
        price : 16000,
        colors : ['black', 'white', 'gray']
    },
    {
        brand : 'Google',
        model : 'Pixel 9',
        price : 50000,
        colors : ['black', 'white', 'gray', 'blue']
    },
    {
        brand : 'Samsung',
        model : 'Galaxy s9',
        price : 50000,
        colors : ['black', 'white', 'gray', 'blue']
    },
];

// access price of 2nd smartphone 
// acess 2nd color of last smartphone 
//  add new color in third smartphone
// replace 1st color of 2nd smartphone

console.log(smartphoneArray.length);

// filter all smartphones with price less than 50000

const budgetPhones = smartphoneArray.filter((phone) => {
    return phone.price < 50000;
});

console.log(budgetPhones);

// filter all phones with bluw color

const colors = smartphoneArray.filter((phone) => {
    return phone.colors.includes('blue');
});

console.log(colors);

const brands = smartphoneArray.map( (phone) => {
    return phone.brand;
});

console.log(brands);

const keyword = 'sam';
// const results = smartphoneArray.filter((phone) => {
//    return phone.brand.toLowerCase() === keyword.toLowerCase(); 
// });

const results = smartphoneArray.filter((phone) => {
    return phone.brand.toLowerCase().includes(keyword.toLowerCase()); 
 });

console.log(results);