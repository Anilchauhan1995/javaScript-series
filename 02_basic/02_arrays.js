const marval_heros = ["Thor" , "Hulk" , "spiderman"];
const dc_heroes = ["superman" , "flash" , "barman"];

// marval_heros.push(dc_heroes);

// console.log(marval_heros[3][1]);

// console.log(marval_heros);

const allHeroes = marval_heros.concat(dc_heroes);
console.log(allHeroes);

const all_new_heroes = [...marval_heros , ...dc_heroes];
console.log(allHeroes);

const anotherArr = [1,2,3,[4,5,6,],7,[6,7,[4,5]]];

const realAnotherArr = anotherArr.flat(Infinity);
console.log(realAnotherArr);

console.log(Array.isArray("AnilChauhan"))
console.log(Array.from("AnilChauhan"))
console.log(Array.from({Name : "AnilChauhan"}))

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));