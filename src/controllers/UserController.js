import repos from "../repositories/index.js";
import { generateAccessToken } from "../utils/jwt.js";
const UserController = {
  async getAllUsers(req, res) {
    try {
      const users = await repos.UserRepository.getAll();
      console.log(typeof users);
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async getUser(req, res) {
    try {
      const user = await repos.UserRepository.getOne(req.body);
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async login(req, res) {
    try {
      const account = await repos.UserRepository.login(req.body);
      if (account != null) {
        const id = account._id.toString();
        const role = account.role;
        const username = account.username;
        const token = generateAccessToken({
          id: id,
          username: username,
          role: role,
        });
        res.json({ token });
      } else res.status(401).json("tài khoản hoặc mật khẩu sai!");
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async register(req, res) {
    try {
      const newUser = await repos.UserRepository.register(req);
      return res.json(newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async updateOne(req, res) {
    try {
      const update = await repos.UserRepository.updateOne(req);
      return res.json(update);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
export default UserController;
