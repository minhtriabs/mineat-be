import '../config/db.js';
import '../models/UserModel.js'
exports.getAllUsers = async (req, res) => {
    res.json({ users: ['John', 'Jane', 'Doe'] });
    // try {
    //   const users = await UserModel.find();
    //   res.json(users);
    // } catch (error) {
    //   res.status(500).json({ error: error.message });
    // }
  };