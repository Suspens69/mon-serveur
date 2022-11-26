import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  emplacement: {
    type: String,
    required: true,
    unique: true,
  },
});

export default videoSchema



