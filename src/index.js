import getClasses from './getClasses';

getClasses();

const obj = { a: "shubham", b: "chauhan" };

const newObj = { ...obj, c: "rajpoot" };
console.log(newObj);