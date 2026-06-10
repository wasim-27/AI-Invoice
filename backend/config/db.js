import mongoose from "mongoose";

export const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('✅ Database Connected')
    }
    catch(error){
        console.log('❌ DATABASE Connecection failed',error.message)
        process.exit(1); // agar database connect nhi hua hoga,ye broken state main server ko run nhi karega.
    }
};