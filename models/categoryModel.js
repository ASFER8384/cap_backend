import mongoose from "mongoose";


//Category model schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});



export default mongoose.model("Category", categorySchema);
