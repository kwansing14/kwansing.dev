import Template from './Template';

const KnoxDao = () => {
  return (
    <Template title={'KnoxDAO'}>
      <div>
        KnoxDAO is a project that aims to create a decentralized, secure, and
        accessible DAO built on Celo chain.
      </div>
      <div>
        I am the main developer for KnoxDAO. Developed the frontend for KnoxDAO
        using NextJS. And written 4 smart contracts for KnoxDAO. ERC721 -
        Knoxers , a set of NFTS given to the community, representing the
        different roles of each community members. ERC721 - Shiki, a randomly
        generated 300 collections of art for Knoxers to use as profile pic.
        ERC20 - KUSD, tokens. emitted to Knoxer holders. ERC721 - KnoxWorld
        fully on chain, no ipfs, include assembling and dissassembling
        functions, serves as a educational platform.
      </div>
    </Template>
  );
};

export default KnoxDao;
