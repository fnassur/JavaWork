//AdventureGame script

const readline = require("readline-sync");

let playerName = "";
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";
let gameRunning = true;
let inventory = [];

console.log("Enter Player Name: ");

playerName = readline.question();

console.log("Welcome player: " & playerName);
console.log("Your current gold is: " & playerGold);
