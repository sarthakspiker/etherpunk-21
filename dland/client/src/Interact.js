import Web3 from "web3";

const web3  = new Web3('localhost:8545');

const account = web3.eth.accounts.add('75b5ed1445fd97a48f12184eec3677a18d4e2f7d5c344034a3370c886a03b0bf');

console.log(account);

module.exports = {
    web3: web3,
    account: account
}