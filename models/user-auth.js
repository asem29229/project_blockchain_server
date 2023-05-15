
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        
        
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
         
        password: {
            type: String,
            required: true,
            min: 6,
            max: 64,
        },
        
    },
    { timestamps: true }
);

export default mongoose.model("userAuth", userSchema,'user-auth');
