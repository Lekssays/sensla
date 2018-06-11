// cryptographic settigns
const Blockchain = require('./Blockchain.js');
const Block = require('./Block.js');

var myChain = new Blockchain();

myChain.addBlock(new Block("06/11/2018", 
    { 
        name: "Ahmed Lekssays", 
        username:"lekssays", 
        from: "Imi-N-Tanoute"
    }
));

myChain.addBlock(new Block("06/12/2018", 
    { 
        name: "Mohammed Khalil Ait Brahim", 
        username:"khalilwtf", 
        from: "Meknes"
    }
));

// to test it.. I will need to implement the mining function
console.log(JSON.stringify(myChain, null, 4));
console.log("Is blockchain valid? " + myChain.checkValid());
