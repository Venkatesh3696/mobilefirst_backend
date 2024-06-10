import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
    },
  },
  { timeStamps: true }
);

export default mongoose.model("Users", userSchema);
