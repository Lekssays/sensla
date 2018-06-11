const SHA256 = require("crypto-js/sha256");

module.exports =  class Block {
    constructor(timestamp, data) {
        // attributes of the block
        this.index = 0;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = "0";
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        // the hash is made from the whole attributes of the 
        // block + previous hash of the previous block in the chain
        return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString();
    }

    mineBlock(difficulty) {
        // TODO
    }
}