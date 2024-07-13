const MyObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift By apple"
}
for (const key in MyObject) {
    console.log(`${key} shortcut is for ${MyObject[key]}`);
}

const programming = ["js", "rb", "java","py"]
for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
// }

