const { getUserService, createUserService } = require("../services/user");

exports.getUserController = async function (req, res, next) {
  let filter = req.params;

  const userData = await getUserService(filter).catch((e) => {
    return { error: e.message };
  });
  if (userData.error) {
    res.status(400).json(userData);
  } else {
    res.json(userData);
  }
};

exports.createUserController = async function (req, res, next) {
  const data = req.body;
  //handle validation
  return createUserService(data)
    .then((user) => {
      return res.json(user);
    })
    .catch((e) => {
      return res.status(400).json({ error: e.message });
    });
};