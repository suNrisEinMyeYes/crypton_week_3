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
      
      Token = await ethers.getContractFactory("Unique");
      [owner, addr1, addr2] = await ethers.getSigners();
      
      hardhatToken = await Token.deploy("av", "asd");
    });

    describe("mint", function () {
      
      it("mint some tokens", async function () {
       
        

        await hardhatToken.connect(owner).mint(addr1.getAddress(),0,1,"0x")
        expect(await hardhatToken.balanceOf(addr1.getAddress(), 0)).to.equal(1);


      });
    });

  });