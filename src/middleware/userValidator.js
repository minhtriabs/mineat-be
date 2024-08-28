import UserModel from "../models/UserModel.js";
const userValidator = {
  async checkEmailExistence(req, res, next) {
    const { email } = req.body;
    try {
      const existingUser = await UserModel.read({
        type: "duplicate",
        email: email,
      });
      console.log(existingUser);
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Email đã tồn tại trong hệ thống." });
      }
      next();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
export default userValidator;
