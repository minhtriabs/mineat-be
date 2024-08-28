import mongoose from "mongoose";
const mongoURL = "mongodb://localhost:27017/mineat";

const connectDB = async () =>
  await mongoose
    .connect(mongoURL)
    .then(() => {
      console.log("Kết nối MongoDB thành công!");
    })
    .catch((err) => {
      console.error("Lỗi kết nối MongoDB:", err);
    });
export default connectDB;
