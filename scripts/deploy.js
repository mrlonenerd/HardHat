async function main() {
    const contract = await ethers.getContractFactory("NftBazaar");
    
    // Start deployment, returning a promise that resolves to a contract object
    const deployed = await contract.deploy();   
    console.log("Contract deployed to address:", deployed.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });