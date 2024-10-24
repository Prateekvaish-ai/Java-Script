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
        brand : 'sumsung',
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
        colors : ['black', 'white', 'gray']
    },
];

// access price of 2nd smartphone 
// acess 2nd color of last smartphone 
//  add new color in third smartphone
// replace 1st color of 2nd smartphone

console.log(smartphone[1].price);