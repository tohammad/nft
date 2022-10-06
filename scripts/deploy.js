const { ethers } = require("hardhat");

const main = async () => {
  const [deployer] = await ethers.getSigners();
  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy();

  console.log("Token Address %s", myNFT.address);
};

main()
  .then(() => process.exit(0))
  .catch((err) => console.error(err));
