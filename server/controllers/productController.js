const Product = require('../models/productModel');
class productController {

    async getProducts(req, res){
        
        try{
            
            const done = await Product.find({});
            res.status(200).json(done);
        }
        catch(err){
            res.status(500).json(err);
        }}

    async getProduct(req, res){

        let productID = req.params.productID.trim();
        console.log('=====> ', productID)
        try{
            const done = await Product.findOne({_id:productID});
            console.log('D O N E',done)
            res.status(200).json(done);
        }
        catch(err){
            res.status(500).json(err);
        }}

    async addProduct(req, res){
        const {productName, artistName, price, productInfo, image, image_public_id} = req.body;
        try{
            const done = await Product.create({productName, artistName, price, productInfo, image, image_public_id})
            res.status(200).json(done);
        }
        catch(err){
            res.status(500).json(err);
        }}

    async deleteProduct(req, res){
        console.log('==============>',req.body)
        const {ID} = req.body;
        try{
            const done = await Product.remove({_id:ID});
            res.status(200).json(done);
        }
        catch(err){
            res.status(500).json(err)
        }}


}




module.exports = new productController();