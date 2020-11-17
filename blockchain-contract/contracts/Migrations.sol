// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.8.0;

contract Migrations {
  address public owner = msg.sender;

  struct Account {
    string username;
    uint password;
  }
  
  bool public connected = false;

  Account[] public accounts;
  uint nbAccount = 0;

  mapping (uint => address) public accountToOwner;
  // mapping (address => uint) ownerAccountNb;

  // This function is restricted to the contract's owner
  modifier restricted() {
    require( msg.sender == owner);
    _;
  }

  function addUser(string memory _name, string memory _psw) public restricted {
    require(connected == false);

    uint id = accounts.push(Account(_name, _psw)) - 1;
    accountToOwner[owner] = id;
    nbAccount++;
    connected = true;

  }

  function authen(string memory _name, string memory _psw) public restricted returns (bool) {
    require(connected == false);

    for(uint i = 0; i< accounts.lenght; i++) {
      if(_name == accounts[i].name && _psw == accounts[i].password ) {
        connected = true;
        return true;
      }
    }
    return false;
  }

  
  function deconnect() public restricted {
    require(connected == true);
  }

  
  function status() public restricted {
    return connected;
  }
}
