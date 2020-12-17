const Users = artifacts.require('contracts/UsersContract');

module.exports = function(deployer) {
  deployer.deploy(Users);
};
