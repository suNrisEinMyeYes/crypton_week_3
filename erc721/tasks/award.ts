import { task } from "hardhat/config";
import * as dotenv from "dotenv";
import { contractAddress } from "../tconfig"

dotenv.config();

task("award", "mint token to address")
.addParam("to", "The account's address")
.setAction(async (taskArgs, hre) => {
  const provider = new hre.ethers.providers.JsonRpcProvider(process.env.API_URL) 
  const signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY !== undefined ? process.env.PRIVATE_KEY : [], provider)

  const myContract = await hre.ethers.getContractAt('GameItem', contractAddress, signer)
  const out = await myContract.awardItem(taskArgs.to, taskArgs.sum);
  console.log(out)
});