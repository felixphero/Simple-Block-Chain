const SHA256 = require("crypto-js/sha256");
class Block {
  constructor(body) {
    (this.hash = 0),
      (this.height = 0),
      (this.body = body),
      (this.time = 0),
      (this.previousHash = "");
  }
}
class BlockChain {
  constructor() {
    this.chain = [];
    this.addBlock(new Block("This is the genesis block: Genesis"));
  }
  addBlock(newBlock) {
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    newBlock.time = Date()
      .toString()
      .slice(0, -3);
    newBlock.height = this.chain.length;
    if (this.chain.length > 0) {
      newBlock.previousHash = this.chain[this.chain.length - 1].hash;
    }
    this.chain.push(newBlock);
  }
}
