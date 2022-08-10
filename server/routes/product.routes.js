const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/products', ProductController.createProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.put('/api/products/:id', ProductController.updateProducts);
    app.delete('/api/products/:id', ProductController.deleteProducts);
}