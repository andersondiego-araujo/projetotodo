const  readlinesync  = require ( 'readline-sync' );
let quem;
let oQue;
let paraQue;
quem = readlinesync.question("quem?")
oQue = readlinesync.question("o que deseja?")
paraQue = readlinesync.question("para que?")
console.log("como" + " " + quem + "," + " " + "eu" + " " + oQue + " " + paraQue);

