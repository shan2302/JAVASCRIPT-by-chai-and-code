////////////////////////////ARRAY////////////////////////////

const myArr = [0,1,2,3,4,5]
const myHeroes = ["superman", "wolverine", "spiderman"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[0]);

///Array method//////////

myArr.push(6) //this will add a element in array
myArr.pop()  //this will delete last element from array
myArr.unshift(9) //this will add element in array from beginning
myArr.shift() //this will remove element in array from beginning
console.log(myArr.includes(9));
console.log(myArr.indexOf(2));

const newArr = myArr.join() //this will bind and convert array into string
console.log(myArr);
console.log(typeof newArr);


// slice,splice//

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr);

//slice(1,3) does not add 3(last element in () )
//splice() contains all element which is present in () and remove it from array