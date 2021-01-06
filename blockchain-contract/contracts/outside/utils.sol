pragma solidity >=0.4.0 <=0.8.0;
library Utils{
    function equals(string memory a, string memory b) public view returns (bool){
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }
    
}