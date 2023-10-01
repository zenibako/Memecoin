import { expect } from "chai";

describe("Bachelors", function () {
  it("Should return the right name and symbol", async function () {
    const Bachelors = await hre.ethers.getContractFactory("Bachelors");
    const bachelors = await Bachelors.deploy("Bachelors", "BNFT");

    await bachelors.deployed();
    expect(await bachelors.name()).to.equal("Bachelors");
    expect(await bachelors.symbol()).to.equal("BNFT");
  });
});
