import { Schema, model } from "mongoose";
import { Address, FullName, Orders, users } from "./users.interface";
const FullNameSchema =new Schema<FullName>({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
})
const AddressSchema = new Schema <Address>({
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
})
const OrdersSchema = new Schema <Orders>({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})
const UsersSchema =new Schema<users>({
    userId:{
        type:Number,
        required:true
    },
    username:{
         type:String,
         required:true
    },
    password:{
        type:String,
        required:true
    },
    fullName:FullNameSchema,
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true
    },
    hobbis:[String],
    address:AddressSchema,
    orders:OrdersSchema
})

export const UsersModel = model<users>('users', UsersSchema)