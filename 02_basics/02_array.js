const marvel_heros = ["thor", "hulk", "ironman"]
const marvel_heros1 = ["thor", "hulk", "ironman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);
const myHeros= marvel_heros1.concat(dc_heros)
console.log(myHeros);

const allheros = [...marvel_heros1, ...dc_heros]
console.log(allheros);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("shantanu"))
console.log(Array.from("shantanu"))
console.log(Array.from({name:"shantanu"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));