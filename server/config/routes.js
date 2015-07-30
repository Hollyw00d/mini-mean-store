// server routes

// First at the top of your routes.js file you'll have to require the controller
var customers = require("./../controllers/customers.js");
var products = require("./../controllers/products.js");

// This is our routes.js file located in /config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it a
module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
    });

    // customers are displayed on a customers page
    // AND index page
    app.get("/customersObjects", function(req, res) {
        // "customers" references the
        // "customers.js" controller and
        // "show" is a method of said
        // "customers.js" controller
        customers.show(req, res);
    });


    app.post("/save", function(req, res) {
        customers.saveCustomer(req, res);
    });

    app.get("/destroy/:id", function(req, res) {
        customers.deleteCustomer(req, res);
    });

    app.get("/productsObjects", function(req, res) {
        products.showProducts(req, res);
    });

    app.get("/ordersObjects", function(req, res) {
        customers.showOrders(req, res);
    });

    app.post("/saveOrder", function(req, res) {
        products.updateProduct(req, res);
        customers.saveOrder(req, res);
    });

    app.get("/destroy/order/:id", function(req, res) {
        customers.deleteOrder(req, res);
    });

    app.post("/saveProduct", function(req, res) {
        products.saveProduct(req, res);
    });


    app.get("/destroy/product/:id", function(req, res) {
        products.deleteProduct(req, res);
    });


};