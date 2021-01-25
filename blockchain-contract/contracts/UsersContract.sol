pragma solidity >=0.4.0 <=0.8.0;
import './outside/utils.sol';
contract UsersContract {


  mapping(uint => address) userAdress;
  mapping(uint => string) idName;
  mapping(address => uint) usersCount;
  mapping(address => string) usersMap;

  modifier onlyOwnerOf(uint _id) {
    require(msg.sender == userAdress[_id]);
    _;
  }

  //authentification
  function usercheck() public view returns(uint) {
    // verifier si user have name
    require( _generateNameId(usersMap[msg.sender]) == usersCount[msg.sender]);
    return usersCount[msg.sender];
  }

  function getMyName() public view returns(string memory) {
    uint id = usersCount[msg.sender];
    return idName[id];
  }

  function addUsername(string memory name) public returns(uint) {
    usersMap[msg.sender] = name;
    uint new_id = _generateNameId(name);
    usersCount[msg.sender]++;
    userAdress[new_id] = msg.sender;
    return new_id;
  }
  function _generateNameId(string memory _str) private pure returns (uint) {
      uint rand = uint(keccak256(abi.encodePacked(_str)));
      return rand;
  }
}
