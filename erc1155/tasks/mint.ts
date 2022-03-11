import { task } from "hardhat/config";
import * as dotenv from "dotenv";
import { contractAddress } from "../config"

dotenv.config();

task("award", "mint token to address")
.addParam("to", "The account's address")
.addParam("id", "Token ID")
.addParam("amount", "amount of tokens")
.addParam("data", "Additional information")
.setAction(async (taskArgs, hre) => {
  const provider = new hre.ethers.providers.JsonRpcProvider(process.env.API_URL) 
  const signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY !== undefined ? process.env.PRIVATE_KEY : [], provider)

  const myContract = await hre.ethers.getContractAt('Unique', contractAddress, signer)
  const out = await myContract.mint(taskArgs.to, taskArgs.id, taskArgs.amount, taskArgs.data);
  console.log(out)
});