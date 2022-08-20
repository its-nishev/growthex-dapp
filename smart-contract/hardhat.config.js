require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path:'.env' })

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/ztXQbyFSTEy6gRPC0DklU9CJ-dKXcr60",
      wallet: "ee6300b2773834a62859765b045ed2ec75135cd558398462fc8466697f094a3d"
    }
  }
};
