const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compileData = require("./compile");

const provider = new HDWalletProvider(
  'breeze rich nature furnace charge lumber used insect protect chat picture bulk',
  'https://rinkeby.infura.io/v3/512c787773ce43d9ac472bfa37c1ac4a',
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  //console.log(accounts[0]);

  const result = await new web3.eth.Contract(compileData.abi)
    .deploy({
      data:  compileData.evm.bytecode.object
    })
    .send({ gas: "1000000", from: accounts[0] });
  console.log(compileData.abi);
  console.log("Contract deploy to", result.options.address);
  provider.engine.stop();
};
deploy();