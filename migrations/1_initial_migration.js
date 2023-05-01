const NftBazaar = artifacts.require("NftBazaar");

module.exports = function (deployer) {
  deployer.deploy(NftBazaar);
};
