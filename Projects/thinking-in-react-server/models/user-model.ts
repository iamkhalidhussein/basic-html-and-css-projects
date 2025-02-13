import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {   
        id: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, default: true },
        role: { type: String, default: true },
        status: { type: String, default: true },
    },
    { timestamps: true }
);

export default mongoose.model('users', userSchema);