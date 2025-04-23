import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://greatstack:9317619525@cluster0.jeopoi8.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}