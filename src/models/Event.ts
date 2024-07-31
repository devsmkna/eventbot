import { model, Schema } from "mongoose";
import TEvent from "../types/event";
import { interactions } from "../types/interaction";

const schema = new Schema<TEvent>(
  {
    creator: { type: Number, required: true },
    name: { type: String, minlength: 5, maxlength: 50, required: true },
    description: { type: String, maxlength: 140, required: false },
    locations: [
      {
        type: [{ type: Number, minlength: 2, maxlength: 2, required: true }],
        default: [],
        required: false,
      },
    ],
    participants: [
      {
        type: {
          user: { type: Number, required: true },
          interaction: {
            type: String,
            enum: interactions,
            required: true,
          },
        },
        default: [],
        required: true,
      },
    ],
    dates: [
      {
        type: [{ type: Date, minlength: 1, maxlength: 2, required: true }],
        default: [],
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const MEvent = model<TEvent>("event", schema);

export default MEvent;
