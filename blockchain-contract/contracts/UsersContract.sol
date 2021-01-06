pragma solidity >=0.4.0 <=0.8.0;
import './outside/utils.sol';
contract UsersContract {

  address owner = msg.sender;
  string[] usersList;
  uint nbUser;
  bool connected;
  mapping(address => string) usersMap;
  constructor() public {
    nbUser = 0;
    connected = false;
  }

  modifier restricted() {
    require(
      msg.sender == owner,
      "This function is restricted to the contract's owner"
    );
    _;
  }

  // function setCompleted(uint completed) public restricted {
  //   last_completed_migration = completed;
  // }

  //authentification
  function usercheck() public view restricted returns(bool) {
    //verifier si user have name
    for (uint i = 0; i < usersList.length; i++){
      if( Utils.equals(usersMap[owner],usersList[i]) ) { //keccak256(abi.encodePacked()) == keccak256(abi.encodePacked())
        return true;
      }
    }
    return false;
  }

  function addUsername(string memory name) public restricted {
    usersMap[owner] = name;
    usersList.push(name);
    nbUser++;
    connected = true;
  }
}
