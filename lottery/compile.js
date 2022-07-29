const path = require('path');
const fs = require('fs');
const solc = require('solc');
const { log, Console } = require('console');

const lotteryPath = path.resolve(__dirname,'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');
// solc.compile(source, 1);
var input = {
    language: 'Solidity',
    sources: {
        'Lottery.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 

console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts['Lottery.sol'].Lottery.abi[5]);
module.exports = {
    abi:  JSON.parse(solc.compile(JSON.stringify(input))).contracts['Lottery.sol'].Lottery.abi,
    evm:  JSON.parse(solc.compile(JSON.stringify(input))).contracts['Lottery.sol'].Lottery.evm,
}

