const SongForACity = artifacts.require("SongForACity");
const ToutDoucement = artifacts.require("ToutDoucement");

module.exports = function (deployer) {
  //deployer.deploy(SongForACity);
  deployer.deploy(ToutDoucement);
};
