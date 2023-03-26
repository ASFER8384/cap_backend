import mongoose from "mongoose";


//food model schema
const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    delivery: {
      type: Boolean,
    },
  },
  { timestamps: true }
);


export default mongoose.model("Foods", foodSchema);
