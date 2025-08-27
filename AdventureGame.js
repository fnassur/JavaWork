//AdventureGame script

const readline = require("readline-sync");


//Player Variable initialization
let playerName = "";
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";
let gameRunning = true;
let inventory = [];


//Check if player returning or starting new
let firstTimeplaying = "";

firstTimeplaying = readline.question("Is this your first time playing? (Y/N)")

switch (firstTimeplaying) { 
    case ("Y"):

        //Player Variable initialization
        let playerName = "";
        let playerHealth = 100;
        let playerGold = 20;
        let currentLocation = "village";
        let gameRunning = true;
        let inventory = [];
        let Choice = "";
        let menuChoice = 0;


        //Weapon Initialization
        let weaponDamage = 0;
        let currentWeapon = "";

        //Start Screen

        console.log("=================================");
        console.log("       The Dragon's Quest        ");
        console.log("=================================");
        console.log("\nYour quest: Defeat the dragon in the mountains!");

        //Player Information

        playerName = readline.question("Enter Player Name: ");

        console.log("Welcome player: " + playerName);
        console.log("Your current gold is: " + playerGold);
        console.log("Current weapon damage: " + weaponDamage);

        //Healing potions
        let healingPotionValue = 30;
        console.log("Healing Potions can heal: " + healingPotionValue);


        console.log("======== VILLAGE ========");
        console.log("You are in a bustling village. The blacksmith and market are nearby.");
        console.log("Where would you like to go?");
        console.log("1. Go to Blacksmith");
        console.log("2. Go to Market");
        console.log("3. Enter Forest");
        console.log("4. Check Status");
        console.log("5. Quit Game");

        Choice = readline.question("Enter your choice 1-5:");
        menuChoice = parseInt(Choice);

        switch (menuChoice) {
            case (0):
                console.log("======== VILLAGE ========");
                console.log("You are in a bustling village. The blacksmith and market are nearby.");
                console.log("Where would you like to go?");
                console.log("1. Go to Blacksmith");
                console.log("2. Go to Market");
                console.log("3. Enter Forest");
                console.log("4. Check Status");
                console.log("5. Quit Game");
                Choice = readline.question("Enter your choice 1-5:");
                menuChoice = parseInt(Choice);
            case (1):
                //Game mechanics - BlackSmith
                console.log("Blacksmith: 'Looking for weapons?' ");
                console.log("Blacksmith: 'When you buy a sword, weapon damage will increase to 10!'");
                currentWeapon = readline.question("Would you like to buy a weapon?");
                if (currentWeapon = "Y") {
                    console.log("You bought a sword!");
                    inventory[0] = "Sword";
                    weaponDamage = 10;
                } else {
                    inventory[0] = "";
                    currentWeapon = inventory[0];
                    console.log("You will return to the Village. Come back again!");
                    menuChoice = 0;
                }

                console.log("Your weapon damage is now: " + weaponDamage);
                menuChoice = 0;
            case (2):
                menuChoice = 0;
            case (3):
                menuChoice = 0;
            case (4):
                console.log("Your current gold is: " + playerGold);
                console.log("Your Current weapon damage: " + weaponDamage);
                console.log("Your Current health: " + playerHealth);
                console.log("Your Current Location: " + currentLocation);
                menuChoice = 0;
            case (5):
                break;
            default:
                console.log("Wrong Choice");
                break;
        }


        break;
    case ("N"):
        //Start Screen

        console.log("=================================");
        console.log("       The Dragon's Quest        ");
        console.log("=================================");
        console.log("\nYour quest: Defeat the dragon in the mountains!");
        console.log("Welcome Back Player: " + playerName);
        console.log("Your current gold is: " + playerGold);
        console.log("Your Current weapon damage: " + weaponDamage);
        console.log("Your Current health: " + playerHealth);
        console.log("Your Current Location: " + currentLocation);

        

        break;

    default:
        console.log("Please enter either Y or N next time");


}

