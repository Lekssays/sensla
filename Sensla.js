const Block = require('./Msmar.js');

module.exports = class Sensla {
    constructor() {
        this.chain = [this.iCantGoOnWithoutYou()];
    }

    iCantGoOnWithoutYou() {
        return new Block(0, "06/11/2018", "Khalil challenged me to write this.", "0")
    }

    doIWannaKnow() {
        return this.chain[this.chain.length - 1]
    }

    freeBird(newBlock){
        // check calculate hash for more info
        newBlock.previousHash = this.doIWannaKnow().hash;
        newBlock.hash = newBlock.htaLgitLiTbghini();
        this.chain.push(newBlock);
    }

    getLucky() {
        for(var i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.htaLgitLiTbghini()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}