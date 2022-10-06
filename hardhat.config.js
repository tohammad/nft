require("dotenv").config();
require("@nomiclabs/hardhat-waffle")
//const {ALCHEMY_API_KEY, GOERLI_PRIVATE_KEY} = process.env;
const ALCHEMY_API_KEY = "obI8j6tAqY99nEH7Jwr31o1NxGUPAmyi";
const GOERLI_PRIVATE_KEY = "feb12ab7b4d65a8e2d2bc1390b7197fa05832157c35f4ec618ffae08e8166e10";
module.exports = {
  solidity: "0.8.17",
  networks: {
    GOERLI: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`],
    }
  }
};