const Product = require('../models/product.model');

module.exports = {
    getAllProducts: (req, res) => {
        Product.find({})
        .then((allProducts) => res.json(allProducts))
        .catch((err) => console.log(err));
    },

    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => console.log(err));
    },

    createProducts: (req, res) => {
        console.log(req.body)
    Product.create(req.body)
        //.then(resp => resp.json())
        .then(product => 
            {
                console.log('===creating product', product)
                return res.json(product)
            })
        .catch(err => res.json(err));
        },

    updateProducts: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch((err) => res.json(err))
    },

    deleteProducts: (req,res) => {
        Product.deleteOne({_id: req.params.id})
        .then(deleteCheck => res.json(deleteCheck))
        .catch((err) => res.json(err))
    }
}