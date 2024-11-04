require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const Product =require('./models/product.model.js');
const productRoute= require('./routes/product.route.js')
const app=express()


//middleware
app.use(express.json());
//to add the data from other format 
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/products',productRoute);



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

app.get('/',(req,res)=>{
    res.send("Hello from Akshat ");

});
// get all products
// app.get('/api/products',async(req,res)=>{
//     try {
//         var products= await Product.find({});
//         res.status(200).json(products);

//     } catch (error) {
//         res.status(500).json({message : error.message});
//     }
// })

// app.get('/api/products/:id',async(req,res)=>{
//     try {
//         // getting the id from URL
//         const { id } = req.params;
//         //Getting the unique object
//         const product =await Product.findById(id);
//         res.status(200).json(product);

//     } catch (error) {
//         res.status(500).json({message : error.message});
//     }
// })
// // creating a product
// app.post('/api/products',async(req,res)=>{
//     try {
//         const product=await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })

// //update API to update the product, use put() to update
// app.put('/api/products/:id',async(req,res)=>{
//     try {
//         const {id} =req.params;

//         // pass the id and the body that has the updated value
//         const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
//         if(!updatedProduct){
//             return res.status(404).json({message :"Product is not there in the marketplace"});
//         }

//         //checking the updated product to make sure it is updated

//         const upProduct= await Product.findById(id);
//         res.status(200).json(upProduct);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// })


// //delete API to delete the product , we use app.delete

// app.delete('/api/products/:id', async(req,res)=>{
//     try {
//         const {id} = req.params;
//         const product =await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(404).json({message : " Product not found"});
//         }
//         res.status(200).json({message : " Product deleted successfully "});
//     } catch (error) {
//         res.status(500).json({message : error.message});
//     }
// })

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
    console.log("Connected");
})
.catch(()=>{
    console.log("Connection Failed");
});