console.log(100);

console.log('object');

console.log(20, 'hello', true);

console.error('Error');

console.table({ name: 'Brad', email: 'brad@gmail.com' });

console.warn('Warning');

console.group('Simple');
console.error('Error');
console.table({ name: 'Brad', email: 'brad@gmail.com' });
console.warn('Warning');

const styles = 'padding: 10px; background-color: white; color:green';

console.log('%cHello World', styles);
