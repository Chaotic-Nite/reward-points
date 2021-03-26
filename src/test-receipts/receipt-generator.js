const { uuid } = require("uuidv4");
//const jsonfile = require("jsonfile");

//Removed File directory
const receiptList = receiptGen(20);

// jsonfile.writeFile(file, receiptList, function (err) {
//   if (err) console.error(err);
// });

// Function for generator
function receiptGen(amountOfReceipts) {
  var receiptArrObj = [];
  for (let i = 0; i < amountOfReceipts; i++) {
    let newObj = {
      _id: "",
      rewardAccount: 0,
      rewardAmount: 0,
      subtotal: "$",
      total: "$",
    };
    newObj._id = uuid().split("-").join("");
    newObj.rewardAccount = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    const rewardAmount = Math.floor(Math.random() * (25 - 1 + 1) + 0);
    const matchAccnts = receiptArrObj.filter(
      (item) => item.rewardAccount === newObj.rewardAccount
    );
    if (matchAccnts.length > 0) {
      newObj.rewardAmount =
        matchAccnts[matchAccnts.length - 1].rewardAmount + rewardAmount;
    } else {
      newObj.rewardAmount = rewardAmount;
    }
    const subTotal = Math.floor(Math.random() * (150 - 35 + 1) + 0);
    newObj.subtotal += subTotal.toFixed(2);
    newObj.total += (subTotal * 0.09 + subTotal).toFixed(2);
    receiptArrObj.push(newObj);
  }
  return receiptArrObj;
}
