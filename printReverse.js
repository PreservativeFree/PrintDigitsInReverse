const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let userNums;
rl.question('Enter digits: ', (answer) => {
        userNums = answer;
        printInReverse(userNums);
        rl.close();
});

const printInReverse = function(userNums) {
    let myExp = 0;

    while(Math.trunc(userNums/Math.pow(10, myExp)) >= 10)
        myExp++
    
    while(myExp != -1) {
        printDigit = userNums % 10; //get digit
        userNums = Math.trunc(userNums/10); //store new Value 
        console.log(printDigit);
        myExp--;
    }
}

