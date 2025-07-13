import { Schema, model, models, Types } from "mongoose";

export interface IMessage {
  _id: Types.ObjectId;
  receiverId: Types.ObjectId;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    receiverId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = models.Message || model<IMessage>("Message", messageSchema);

export default Message;
