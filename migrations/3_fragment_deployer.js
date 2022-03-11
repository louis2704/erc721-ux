const Fragment = artifacts.require(
  "./Fragment.sol"
);
const fragmentClaimer = artifacts.require(
  "./fragmentClaimer.sol"
);

async function doDeploy(deployer, network, accounts) {

  const ERC721Contract = await deployer.deploy(
    Fragment
  );

  const fragmentClaimerContract = await deployer.deploy(
    fragmentClaimer,
    431,
    ERC721Contract.address
  );
  // Declare fragmentClaimer as minter for ERC721
  await ERC721Contract.manageMinter(fragmentClaimerContract.address, true);

}

module.exports = (deployer, network, accounts) => {
  deployer.then(async () => {
    await doDeploy(deployer, network, accounts);
  });
};
