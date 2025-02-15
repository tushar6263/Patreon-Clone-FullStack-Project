"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"
import Username from "@/app/[username]/page"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })

    instance.orders.create({
        amount: 5000,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    //create a payment object which shows a pending payment in the database
    await Payment.create({
        oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message:
            paymentform.message
    })

    return x
}

export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connectDb()
    //find all payments sorted by decreasing order of amount and flatten object ID
    let p = await Payment.find({ to_user: username }).sort({amount:-1}).lean()
    return p
}

export const updateProfile = async (data , oldusername) =>{
    await connectDb()
    let ndata = Object.fromEntries(data)

    //If the username is being updated , check if username is available
    if(oldusername !== ndata.username){
        let u = await User.findOne({username: ndata.username})
        if(u){
            return {error:"Username already exists"}
        }
    }
     await User.updateOne({email:ndata.email},ndata)
}
