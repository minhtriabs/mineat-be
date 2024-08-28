import mongoose from "mongoose";
import connectDB from "../config/db.js";

connectDB();
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  id: ObjectId,
  username: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: true,
  },
  email: {
    type: String,
    maxlength: 255,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 255,
    required: true,
  },
  phone: {
    type: String,
    match: /^[0-9]{10}$/,
    required: true,
  },
  address: { type: String, minlength: 6, maxlength: 255 },
  role: {
    type: String,
    minlength: 1,
    maxlength: 10,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdateAt: {
    type: Date,
    default: Date.now,
  },
  isActive: { type: Boolean, default: true },
});
export const model = mongoose.model("users", userSchema);
const UserModel = {
  async createOne(newUser) {
    try {
      console.log(newUser);
      return await newUser.save();
    } catch (error) {
      return error.message;
    }
  },
  async createMany(newUser) {
    try {
      console.log(newUser);
      return await newUser.save();
    } catch (error) {
      return error.message;
    }
  },
  async updateOne() {
    try {
      const result = await model.find();
      return result;
    } catch (error) {
      return error.message;
    }
  },
  async updateMany() {
    try {
      const result = await model.find();
      return result;
    } catch (error) {
      return error.message;
    }
  },
  async read(req) {
    try {
      console.log(req);
      let result;
      switch (req.type) {
        case "findAll":
          result = await model.find();
          break;
        case "findOne":
          result = await model.findOne({
            email: req.email,
            password: req.password,
          });
          break;
        case "findOneByID":
          result = await model.findOne({ _id: req.id });
          break;
        case "duplicate": {
          result = (await model.findOne({
            email: req.email,
          }))
            ? true
            : false;
          break;
        }
        case "customOperation":
          result = await model.customOperation();
          break;
        default: {
          result = new Error("Invalid reads parameter");
        }
      }
      return result;
    } catch (error) {
      // console.log(error.message);
      return error.message;
    }
  },
  async deleteOne() {
    try {
      const result = await model.find();
      return result;
    } catch (error) {
      return error.message;
    }
  },
  async deleteMany() {
    try {
      const result = await model.find();
      return result;
    } catch (error) {
      return error.message;
    }
  },
};
export default UserModel;
