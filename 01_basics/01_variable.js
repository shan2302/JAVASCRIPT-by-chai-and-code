const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword ="12345"
accountCity = "muzaffarpur"
let accountState;

// accountId = 2 //not allowed
accountEmail = "def@yahoo.com"
accountPassword = "234"
accountCity = "patna"
/* prefer not to use var
because of the issue in the block scope and functional scope */
console.log(accountId);
console.table([accountEmail , accountId , accountCity , accountPassword ,accountState])