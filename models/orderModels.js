import mongoose from "mongoose";


// order model schema
const orderSchema = new mongoose.Schema(
  {
    foods: [
      {
        type: mongoose.ObjectId,
        ref: "Foods",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Orderd",
      enum: ["Orderd", "Confirmed", "Preparing", "Prepared", "cancel"],
    },
  },
  { timestamps: true }
);


export default mongoose.model("Order", orderSchema);
