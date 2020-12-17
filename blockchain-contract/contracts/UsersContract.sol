// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.8.0;

contract UsersContract {
  address public owner = msg.sender;

  struct Account {
    string username;
  }
  
  bool public connected;

  Account[] internal accounts;

  mapping (string => address) public accountToOwner;
  mapping (address => string) ownerAccount;

  // This function is restricted to the contract's owner
  modifier restricted() {
    require( msg.sender == owner);
    _;
  }

  

  function addUser(string memory _name) public restricted {
    require(!connected);
    if(!existAccountAdr(_name)){
      accounts.push(Account(_name));
      ownerAccount[owner] = _name;
      accountToOwner[_name] = owner;
      connected = true;
    }
  }
  
  function authentStatus() public restricted view returns (bool) {
    return connected;
  }


  function existAccountAdr(string memory _name) public restricted view returns (bool) {

    for(uint i = 0; i< accounts.length; i++) {
      if(accountToOwner[_name] == getOwnerByName(accounts[i].username)) {
        return true;
      }
    }
    return false;
  }

  function getOwnerByName(string memory _name) public view returns (address) {
    return accountToOwner[_name];
  }

  function getUserByAdress(address _adress) public view returns (string memory) {
    return ownerAccount[_adress];
  }

}