// const Migrations = artifacts.require("Migrations");
const Utils = artifacts.require("Utils");
const UsersContract = artifacts.require("UsersContract");
const BienImmoContract = artifacts.require("BienImmoContract");

module.exports = function (deployer) {
  deployer.deploy(Utils);
  deployer.link(Utils, UsersContract);
  deployer.deploy(UsersContract);
  deployer.link(Utils, BienImmoContract);
  deployer.link(UsersContract, BienImmoContract);
  deployer.deploy(BienImmoContract);
};
