const instruments = ['piano', 'drums', 'trumpet'];
let length;

length = instruments.push('guitar', 'violin', 'triangle');
console.log(length);

length = instruments.unshift('cowbell', 'tuba');
console.log(length);