const fs = require('fs-extra');

const src_Users = '../blockchain-contract/build/contracts/UsersContract';
const dest = './artifacts';


// destination will be created or overwritten by default.
//fs.chmodSync('../blockchain-contract','r');
fs.copyFileSync(src_Users, dest, err => {
  if (err)  console.log(err) ;
  console.log('json users smartcontracts files was copied to destination \/build-artifacts');
});
