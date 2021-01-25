const BienImmoABI = require('./model/bien-immo-abi.json');
const Web3 = require('web3');


//const PROJECT_ID= '41abb1cb24ec4c2a96cb01c20d2395db';/
var bienImmobContract;
var currentAccount;

function startApp() {
  var contractAddress = "0x8E67DDD80d7466a59f977CC1ecBe011d502B3980";
  bienImmobContract = new window.web3.eth.Contract(BienImmoABI, contractAddress);
  const isFetch = bienImmobContract !== null || bienImmobContract !== undefined? "is fetch.":"is not fetch."
  console.log('contract => ' + isFetch);
}
async function accountsLoaded() {   
  const accounts = await window.web3.eth.getAccounts();
  console.log('accounts => ' + accounts);
  currentAccount = window.web3.eth.currentAccount;
  console.log("Current account => " + accounts[0]);
}

async function methodesEnabled() {   
  const ms = await bienImmobContract.methods != null ? "is fetch.":"is not fetch.";
  console.log('accounts => ' + ms);
}
      // ex function call
      // function getZombieDetails(id) {
      //   return cryptoZombies.methods.zombies(id).call()
      // }

window.addEventListener('load', function() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
    window.web3 = new Web3(window.web3.currentProvider);
    
    window.ethereum.enable();
  } else {
          // Handle the case where the user doesn't have Metamask installed
          // Probably show them a message prompting them to install Metamask
  }
        // Now you can start your app & access web3 freely:
  startApp();
  accountsLoaded();
  methodesEnabled();
  var ok_user = haveUser()
});

// export const enableWeb3 = () => {
//   if (window.web3) {
//     window.web3 = new Web3(window.web3.currentProvider);
//     window.ethereum.enable();
//     return true;
//   }
//   return false;
// }

//const web3 = window.web3;
// console.log("web3: "+ enableWeb3())

export function accountsGet() {   
    return window.web3.eth.getAccounts();
}

//accountsGet();

//var BienImmobilierModel = new window.web3.eth.Contract(BienImmoABI,'0xeF1d8765E8347568D68FE04d4761346Ed2cff98b');



export async function haveUser() {
  var isRegistered = await bienImmobContract.methods.usercheck().call()
  return isRegistered;
}

haveUser()