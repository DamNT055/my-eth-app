const hre = require("hardhat");

async function main() {
  const contractAdress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const myContractInstance = await MyContract.attach(contractAdress);

  // Lấy giá trị message hiện tại
  const currentMessage = await myContractInstance.message();
  console.log("Current message:", currentMessage);

  // Cập nhật message
  const tx = await myContractInstance.setMessage("New message!");
  await tx.wait(); // Chờ giao dịch được xác nhận

  // Lấy giá trị message sau khi cập nhật
  const updatedMessage = await myContractInstance.message();
  console.log("Updated message:", updatedMessage);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
