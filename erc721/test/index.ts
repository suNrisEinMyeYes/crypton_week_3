import { expect } from "chai";
import { Contract, Signer } from "ethers";
import { ethers } from "hardhat";

describe("Token contract", function () {

  let Token;
  let hardhatToken : Contract;
  let owner : Signer;
  let addr1 : Signer;
  let addr2 : Signer;


  beforeEach(async function () {
      
      Token = await ethers.getContractFactory("GameItem");
      [owner, addr1, addr2] = await ethers.getSigners();
      
      hardhatToken = await Token.deploy();
    });

    describe("mint", function () {
      
      it("mint some tokens", async function () {
       
        

        await hardhatToken.connect(owner).awardItem(addr1.getAddress())
        expect(await hardhatToken.ownerOf(1)).to.equal((await addr1.getAddress()).toString());


      });
    });

  });