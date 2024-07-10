// Immediately invoked function expressions IIFE//()()
// we use IIFE because of global copes pollution
(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

((name)=> {
    console.log(`DB CONNECTED AGAIN ${name}`);
})("Shantanu")