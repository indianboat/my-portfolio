import mongoose from "mongoose";

const msgSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);


mongoose.models = {};
const Msg = mongoose.model("msgs", msgSchema);

export default Msg;
