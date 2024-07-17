let x;

const name = 'John';
const age = 30;

x = 'hello, my name is ' + name + ' and I am ' + age + ' years old. ';

//Template Literals

x = `hello, my name is ${name} and I am ${age} years old.`;

//String Properties and methods
const s = new String('Hello world');

x = typeof s;
x = s.length;

//access value by the key
x = s[1];

//to search methods in string
x = s.__proto__;

x = s.toLocaleUpperCase();
x = s.toLowerCase();

x = s.charAt(0);
x = s.indexOf('H');

x = s.substring(1, 5);
x = s.substring(7);

x = s.slice(0, 5);
x = s.slice(-11, -6);

x = '      hello world';
x = x.trim();

x = x.replace('world', 'John');
x = s.includes('Hell');

x = s.valueOf();

x = s.split('');

const myString = 'developer';
//solution 1
x = myString.charAt(0).toUpperCase() + myString.slice(1);

//solution 2
x = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(x);
