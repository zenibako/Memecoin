const hre = require("hardhat");

async function deployCoin() {
  const Bachelorcoin = await hre.ethers.getContractFactory("Bachelorcoin");
  const bachelorcoin = await Bachelorcoin.deploy("Bachelorcoin", "BCOIN");
  await bachelorcoin.deployed();
  await bachelorcoin.addLiquidity();
  console.log("Bachelorcoin deployed to:", bachelorcoin.address);
}

async function deployNft() {
  const Bachelors = await hre.ethers.getContractFactory("Bachelors");
  const bachelors = await Bachelors.deploy("Bachelors", "BNFT");
  await bachelors.deployed();
  console.log("Bachelors deployed to:", bachelors.address);
}

async function main() {
  await deployCoin();
  await deployNft();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
