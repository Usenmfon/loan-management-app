const { getLoanService, createLoanService } = require("../services/loan");

exports.getLoanController = async function (req, res) {
  let filter = req.params;

  const loanData = await getLoanService(filter).catch((e) => {
    return { error: e.message };
  });
  if (loanData.error) {
    res.status(400).json(loanData);
  } else {
    res.json(loanData);
  }
};

exports.createLoanController = async function (req, res) {
  const data = req.body
  console.log(req.body)  //handle validation
  return createLoanService(data)
    .then((loan) => {
      return res.json(loan);
    })
    .catch((e) => {
      return res.status(400).json({ error: e.message });
    });
};
