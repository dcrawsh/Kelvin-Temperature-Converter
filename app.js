const kelvin = 293; //this is the forecast today
const celsius = kelvin-273;//to convert to celsius
console.log(`The temperature is ${celsius} degrees Celsius.`);

let fahrenheit = celsius*(9/5)+32;//convert to fahrenheit 
fahrenheit = Math.round(fahrenheit);//rounds down

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius* (33/100);//converts to newton
newton = Math.round(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
