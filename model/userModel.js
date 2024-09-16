import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
},{timestamps:true})
const User = mongoose.model("User", userSchema);
export default User;