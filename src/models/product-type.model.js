import mongoose, {Schema} from "mongoose";
import modelOptions from "./model.option.js";

export default mongoose.model(
  "ProductType",
  new Schema(
    {
      name: {
        type: String,
        require: true,
      },
    },
    modelOptions
  )
);
