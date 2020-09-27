const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1601178240,
  hardCapTimer: 43200,
  softCap: ether("500"),
};

config.redeemer = {
  redeemBP: 1000,
  redeemInterval: 3600,
  bonusRangeStart: [
    ether("0"),
    ether("100"),
    ether("200"),
    ether("300"),
    ether("400"),
    ether("500"),
    ether("1000"),
    ether("1500")
  ],
  bonusRangeBP: [
    4000,
    3000,
    2000,
    1000,
    500,
    250,
    100,
    0
  ],
};

config.presale = {
  maxBuyPerAddress: ether("25"),
  uniswapEthBP: 5000,
  uniswapLidEthBP: 1000,
  lidEthBP: 500,
  referralBP: 250,
  hardcap: ether("2000"),
  token: "0xA30189d8255322A2F8B2a77906B000aeB005570c",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2",
  marketingFund: "0x898A75EB384Ad4ED16BEB54a95E9577C54eb1Dbb",
  projectFund: "0xCD24E046BB791A97056bB227De8A2d66B3Ee6197",
  teamFund: "0xb0D3eD564709b4ad4aEA55d7f920F59B996b7dc1",
  lidLiqLocker: "0x5d05eEF83499789fD2d3e6b2A7483430B40A0325",
  tokenPoolsBP: {
    marketing: 750,
    team: 1500,
    lidFee: 100,
    project: 2900,
    liquidity: 1458,
    presale: 3000,
    lidLiq: 292
  }
};

config.timelock = {
  releaseInterval: 2592000,
  releaseBP: 1000,
  owner: "0x4735581201F4cAD63CCa0716AB4ac7D6d9CFB0ed"
}

module.exports = config;
