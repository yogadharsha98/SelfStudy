console.log(10 > 20 && 30 > 15 && 40 > 20);
console.log(10 > 20 || 20 > 15);

// && - will return first falsy value or the last value

let a;
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 30;

console.log(a);

const posts = ['post one', 'Post two'];
posts.length > 0 && console.log(posts[0]);

// || - will return the first truthy value or last value

let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined

let c;

c = 70 ?? 20;
c = null ?? 50;
c = undefined ?? 40;

console.log(c);
