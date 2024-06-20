const name = "Shantanu singh"
const repoCount = 2
console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);
const gameName = new String("Shan2302-Randy-Orton");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("S"));

const NewString = gameName.substring(0,4)
console.log(NewString);
const AnotherString = gameName.slice(-8,4)
console.log(AnotherString);

const newStringOne = "     Shantanu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/Javascript%20Basics"
console.log(url.replace("%20","-"));
console.log(url.includes("hitesh"));

console.log(gameName.split("-"));