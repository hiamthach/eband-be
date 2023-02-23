import mongoose, {Schema} from "mongoose";

import modelOptions from "./model.option.js";

export default mongoose.model(
  "Event",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      hero: {
        type: String,
        required: false,
      },
      location: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: false,
      },
    },
    modelOptions
  )
);
