import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
name:{
    type: String,
    required: true
},
price:{
    type: Number,
    required: true
},
image: {
    type: String,
    required: trusted,
}
}, {
    timestamps: true // createdAt updatedAT
});

const Product = mongoose.model('Product', productSchema);
// products

export default Product;