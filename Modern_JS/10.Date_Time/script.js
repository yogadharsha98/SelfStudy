let x;

x = new Date();

x = x.toString();

x = new Date(2021, 0, 10, 12, 30, 0); // month is 0 based

x = new Date('2021-07-10T12:30:00');
x = new Date('07/10/2021 12:30:00');
x = new Date('2022-07-10');
x = new Date('07-10-2022');

x = Date.now(); // millisecound

x = new Date();
x = x.getTime();

x = new Date();

x = Math.floor(Date.now() / 1000); //In second

console.log(x);
