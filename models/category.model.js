import mongoose, { mongo } from "mongoose";

const categorySchema = new mongoose.Schema.ObjectId({
    name : {
        type : String,
        default : ""
    }, 
    image : {
        type : String,

    }
},{
    timestamps : true
})

const CategoryModel = mongoose.model("category",categorySchema)

export default CategoryModel;