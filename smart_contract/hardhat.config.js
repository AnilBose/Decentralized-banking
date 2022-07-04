require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/sRPiF4A55XDtucTbPZPzOCOnyjWD3rA1',
      accounts: ['067754d17be928d83a54ec6ef8970b4e509f4b05e8328e8f134b7f2d8633de7d'],
    },
  },
};