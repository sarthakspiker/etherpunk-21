var RealEstateRental = artifacts.require("./RealEstateRental.sol");

module.exports = function(deployer) {
  deployer.deploy(RealEstateRental);
};
