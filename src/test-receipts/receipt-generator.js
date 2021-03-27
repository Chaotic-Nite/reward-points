const { uuid } = require("uuidv4");
const jsonfile = require("jsonfile");

const file = process.cwd() + '/src/test-receipts/data.json'
const receiptList = receiptGen(20);

jsonfile.writeFile(file, receiptList, function (err) {
  if (err) console.error(err);
});

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
    newObj.rewardAccount =( Math.floor(Math.random() * (9 - 0 + 1) + 0)).toString()
    const subTotal = Math.floor(Math.random() * (150 - 35 + 1) + 0);
    newObj.subtotal += subTotal.toFixed(2);
    newObj.total += (subTotal * 0.09 + subTotal).toFixed(2);
    const rewardAmount = pointCalculator(newObj.total)
    const matchAccnts = receiptArrObj.filter(
      (item) => item.rewardAccount === newObj.rewardAccount
    );
    if (matchAccnts.length > 0) {
      newObj.rewardAmount =
        (parseInt(matchAccnts[matchAccnts.length - 1].rewardAmount) + rewardAmount).toString();
    } else {
      newObj.rewardAmount = (rewardAmount).toString();
    }
    receiptArrObj.push(newObj);
  }
  return receiptArrObj;
}

function pointCalculator(dollarTotal) {
  let total = dollarTotal.split('.')[0].substring(1)
  let totalLength = total.length;
  total = parseInt(total.split(',').join(''))
  let difference = 0
  if (totalLength === 2 && total > 50) {
    difference = total - 50;
  } else if (totalLength > 2) {
    // Subtracts the first $100 and then multiple it by 2 and adds 50
    difference = ((total - 100) * 2) + 50
  }
  return difference
}