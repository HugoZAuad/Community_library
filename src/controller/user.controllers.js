import userServices from "../service/user.services.js";

async function createUserController(req, res) {
  const newUser = req.body;

  try {
    const user = await userServices.createUserService(newUser);
    res.status(201).send({ user });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function findAllUsersController(req, res) {
  try {
    const users = await userServices.findAllUsersService();
    res.send({ users });
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

async function findUserByIdController(req, res) {
  const { id } = req.params;

  try {
    const user = await userServices.findUserByIdService(id);
    res.send({ user });
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

async function updateUserController(req, res) {
  const { id } = req.params;
  const newUser = req.body;

  try {
    const user = await userServices.updateUserService(newUser, id);
    res.send({ user });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

async function deletedUserController(req, res) {
  const { id } = req.params;

  try {
    const message = await userServices.deleteUserService(id);
    res.send({ message });
  } catch (error) {
    return res.status(400).send(error.message);
  }
}

export default {
  createUserController,
  findAllUsersController,
  findUserByIdController,
  updateUserController,
  deletedUserController
};
