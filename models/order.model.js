import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema.ObjectId({
    userid : {
        type : mongoose.Schema.ObjectId,
        ref : 'User'
    },
    orderid : {
        type : String,
        required : [true, "Provide orderId"],
        unique : true
    },
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : 'product'
    },
    product_details : {
        name : String,
        Image : Array,
    }, 
    paymentId : {
        type : String,
        default : ""
    },
    payment_status :  {
        type : String,
        default : ""
    },
    delevery_address : {
        type : mongoose.Schema.ObjectId,
        ref : 'address'
    },
    subTotalAmt : {
        type : Number,
        default : 0
    },
    totalAmt : {
        type : Number,
        default : 0
    },
    invoice_receipt : {
        type : String,
        default : ""
    }
},{
    timestamps : true
})

const OrderModel = mongoose.model('order',orderSchema)

export default OrderModel