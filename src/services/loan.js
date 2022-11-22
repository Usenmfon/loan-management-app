const { LoanModel } = require("../model/loan");

exports.createLoanService = async function (data, createdDate) {

  //please handle validation your way 
  const loanObject = LoanModel({ ...data });
  const error = loanObject.validateSync();
  if (error) {
    throw error;
  }

  let durationInDays = loanObject.dueDate -  new Date();
  durationInDays = Math.abs(Math.floor(durationInDays / (1000 * 60 * 60 * 24)));
  loanObject.duration = durationInDays;

  await loanObject.save();
  return loanObject;
};

exports.getLoanService = async function (filter) {
  try {
    const loan = await LoanModel.find({ ...filter }).populate({
      path: "user",
      select: ["firstname", "lastname"],
    });
    return loan;
  } catch (e) {
    return { error: e.message };
  }
};
