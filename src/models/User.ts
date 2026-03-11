import mongoose, { Document, Schema } from "mongoose";

export interface MessageSchemaType extends Document {
  content: string;
  createdAt: Date;
}

export interface UserSchemaType extends Document {
  name: string;
  emailAdress: string;
  password: string;
  verificationCode: string;
  verificationCodeExpiry: Date;
  isVerified: boolean;
  isaAcceptTerms: boolean;
  isAcceptingMessages: boolean;
  message: MessageSchemaType[];
}

const messageSchema: Schema<MessageSchemaType> = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const userSchema: Schema<UserSchemaType> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },

  emailAdress: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email address is required"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },

  verificationCode: {
    type: String,
    required: [true, "Verify Code is required"],
  },

  verificationCodeExpiry: {
    type: Date,
    required: [true, "Verify Code Expiry is required"],
  },

  isVerified: {
    type: Boolean,
    default: true,
  },

  isaAcceptTerms: {
    type: Boolean,
    default: true,
  },

  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },

  message: [messageSchema],
});

const userModel =
  (mongoose.models.User as mongoose.Model<UserSchemaType>) ||
  mongoose.model("User", userSchema);

export default userModel;
