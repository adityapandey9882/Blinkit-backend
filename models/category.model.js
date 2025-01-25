import mongoose, { mongo } from "mongoose";

const categorySchema = new mongoose.Schema({
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