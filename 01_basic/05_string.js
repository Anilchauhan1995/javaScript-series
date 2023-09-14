let name = "Anil";
let repoCount = 100;

// console.log(name + repoCount);

//console.log(`Hello My name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String ("Anil-Chauhan-kumar-singh");
//console.log(gameName);
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toLocaleUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf("C"));

const newString = gameName.substring(0,5);
//console.log(newString);

const anotherString = gameName.slice(5,3);
console.log(anotherString);

const newStringOne = "   AnilKumar  ";

console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://anilchaunhan.com/anil%20kumar";

console.log(url.replace('%20','/'));

console.log(url.includes('anil'));
console.log(url.includes('ram'));

console.log(gameName.split('-'));
