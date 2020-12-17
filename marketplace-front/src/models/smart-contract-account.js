const Web3 = require("web3");

var fs = require('fs');

const infura_url = "wss://kovan.infura.io/v3/41abb1cb24ec4c2a96cb01c20d2395db";

let web3 = new Web3(
  new Web3.providers.WebsocketProvider(infura_url)
);
console.log('account/contract:' + window.web3.eth.getAccounts);
window.addEventListener("load", () => {
    window.ethereum.autoRefreshOnNetworkChange = false;
    console.log('account/contract:' + window.web3.eth.getAccounts);
})
//let UserSC= JSON.parse(require("../build-artifacts/UsersContract"));
//const Instance = new web3.eth.Contract(UserSC);

// Instance.getPastEvents(
//     "SomeEvent",
//     { fromBlock: "latest", toBlock: "latest" },
//     (errors, events) => {
//         if (!errors) {
//             console.log('events >' + events);
//         }else{
//             console.log('error >' + errors);
//         }

//     }
// );

//export default Instance;