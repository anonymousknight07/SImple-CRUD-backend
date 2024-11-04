const Product=require('../models/product.model.js');


const getProducts = async(req, res)=>{
   
        try {
            const products= await Product.find({});
            res.status(200).json(products);
    
        } catch (error) {
            res.status(500).json({message : error.message});
        }
    

}

const getProduct =async(req,res) =>{
    try {
        // getting the id from URL
        const { id } = req.params;
        //Getting the unique object
        const product =await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

const createProduct=async(req,res)=>{
    try {
        var products= await Product.find({});
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

const updateProduct= async(req,res)=>{
    try {
        const {id} =req.params;

        // pass the id and the body that has the updated value
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
        if(!updatedProduct){
            return res.status(404).json({message :"Product is not there in the marketplace"});
        }

        //checking the updated product to make sure it is updated

        const upProduct= await Product.findById(id);
        res.status(200).json(upProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteProduct =async(req,res)=>{
    try {
        const {id} = req.params;
        const product =await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message : " Product not found"});
        }
        res.status(200).json({message : " Product deleted successfully "});
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}
module.exports ={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

