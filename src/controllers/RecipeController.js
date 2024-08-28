import UserModel from "../models/UserModel";

exports.getAllUsers = async (req, res) => {
    try {
      const users = await UserModel.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };