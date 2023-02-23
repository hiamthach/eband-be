import mongoose, {Schema} from "mongoose";
import modelOptions from "./model.option.js";
export default mongoose.model(
  "Product",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      discount: {
        type: Number,
        required: false,
      },
      type: {
        type: Schema.Types.ObjectId,
        ref: "ProjectType",
        required: false,
      },
    },
    modelOptions
  )
);
