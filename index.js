// cryptographic settigns
const Blockchain = require('./Sensla.js');
const Block = require('./Msmar.js');

var myChain = new Blockchain();

myChain.freeBird(new Block("06/11/2018", 
    { 
        name: "Ahmed Lekssays", 
        username:"lekssays", 
        from: "Imi-N-Tanoute",
        song: "Stairway to Heaven"
    }
));

myChain.freeBird(new Block("06/12/2018", 
    { 
        name: "Mohammed Khalil Ait Brahim", 
        username:"khalilwtf", 
        from: "Meknes",
        song: "Little Wing"
    }
));

// to test it.. I will need to implement the mining function
console.log(JSON.stringify(myChain, null, 4));
console.log("Is blockchain valid? " + myChain.getLucky());
