# Simple-Block-Chain
This is a JavaScript code that can be executed on a node enviroment to explain blockchain. Its a simple implementation of a Blockchain
It covers
* Creation of a block
* Addition of block data
* Creation of a blockchain
* Addition of blocks to the chain

In the code,Hashing of block data is done using 
* CryptoJs SHA 256 
# Running the code commands in node
1. open a terminal and navigate to the folder
2. type node
3. paste the code in the node console
4. initialize a blockchain instance using the command 
* let blockchain=new BlockChain() 
5. add Data to the blockchain 
* blockchain.addBlock(new Block("block chain data"))

6. view data from the block by using the command 
  * blockchain
