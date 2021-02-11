var RealEstateRental = artifacts.require("./RealEstateRental.sol");
var SimpleStorage = artifacts.require("./SimpleStorage.sol")

module.exports = function (deployer) {
  deployer.deploy(RealEstateRental);
  deployer.deploy(SimpleStorage);
};
