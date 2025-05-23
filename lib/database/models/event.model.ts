import { Document, model, models, Schema } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl?: string;
  startDate: Date;
  endDate: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  // categoryId: { _id: string; name: string };
  organizerId: { _id: string; firstName: string; lastName: string };
}
const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String},
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  // category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizerId: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);
export default Event;
