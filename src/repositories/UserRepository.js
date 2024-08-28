import UserModel, { model } from "../models/UserModel.js";

const UserRepository = {
  declareUser(req) {
    try {
      let newUser = new model();
      newUser.username = req.body.username;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      newUser.address = req.body.address;
      newUser.phone = req.body.phone;

      return newUser;
    } catch (error) {
      return error.message;
    }
  },
  async login({ email, password }) {
    try {
      const result = await UserModel.read({
        type: "findOne",
        email: email,
        password: password,
      });
      return result;
    } catch (error) {
      console.log(error.message);
      throw new Error(
        "Error fetching data in login function: " + error.message,
      );
    }
  },
  async register(req) {
    try {
      const newUser = this.declareUser(req);
      return await UserModel.createOne(newUser);
    } catch (error) {
      throw new Error(
        "Error fetching data in getAll function: " + error.message,
      );
    }
  },
  async updateOne({ req, key }) {
    try {
      // const oldUser = UserModel.read{type:"findOne"});
      return await UserModel.update(newUser);
    } catch (error) {
      throw new Error(
        "Error fetching data in getAll function: " + error.message,
      );
    }
  },
  async getAll() {
    try {
      const result = await UserModel.read({ type: "findAll" });
      return result;
    } catch (error) {
      throw new Error(
        "Error fetching data in login function: " + error.message,
      );
    }
  },
  async getOne(req) {
    try {
      const result = await UserModel.read({ type: "findOneByID", id: req.id });
      return result;
    } catch (error) {
      throw new Error(
        "Error fetching data in login function: " + error.message,
      );
    }
  },
};

export default UserRepository;
