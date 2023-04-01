import Template from "./Template";
import knoxweb from "@public/static/knoxweb.png";
import knoxmobile from "@public/static/knoxmobile.png";
import AText from "@/ui/AText";

const KnoxDao = () => {
  return (
    <Template
      title={"KnoxDAO"}
      web={knoxweb}
      mobile={knoxmobile}
      href={"https://www.knoxer.xyz/"}
    >
      <AText>
        KnoxDAO is a project that aims to create a decentralized, secure, and
        accessible DAO built on Celo chain.
      </AText>
      <AText>
        Main developer for KnoxDAO. Developed the frontend for KnoxDAO using
        NextJS. And written 4 smart contracts for KnoxDAO.
      </AText>
      <AText>
        ERC721 - Knoxers & Shiki, random generated 300 collections of pixel art
        distributed to the community for free to use as profile pic and able to
        generate ERC20 token based on Knoxers Tier.
      </AText>
      <AText>
        ERC20 - KUSD, tokens. emitted to Knoxer holders, for DAO voting.
      </AText>
      <AText>
        ERC721 - KnoxWorld fully on chain art, no ipfs, each NFT blocks are
        reversable as it can be assemble + disassemble, to serves as a
        collaborative blocks for Refi Education.
      </AText>
    </Template>
  );
};

export default KnoxDao;
