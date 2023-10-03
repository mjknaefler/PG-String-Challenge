let coder = 'I am a good programmer';

let type = typeof(coder);
console.log(type);

let length = coder.length;
console.log(length);

let upper = coder.toUpperCase();
console.log(upper);

let lower = coder.toLowerCase();
console.log(lower);

let find = coder.includes('good');
console.log(find);

let stripped = coder.replace('programmer','');
console.log(stripped);

let endsWith = coder.endsWith('programmer');
console.log(endsWith);

let split = coder.split('good')
console.log(split[0]);
console.log(split[1]);