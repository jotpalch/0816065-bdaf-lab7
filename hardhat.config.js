require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/YLTGBCYboP0AAoFnfDrxMvSePOdpZ0BO",
        blockNumber: 17228670
      }
    }
  }
};