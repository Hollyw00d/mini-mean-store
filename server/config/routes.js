// server routes

// First at the top of your routes.js file you'll have to require the controller
var customers = require("./../controllers/customers.js");
var products = require("./../controllers/products.js");
var orders = require("./../controllers/orders.js");
var sessions = require("./../controllers/sessions.js");

// This is our routes.js file located in /config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it a
module.exports = function(app, session) {

    /****** home page ******/

    // Show the home page
    app.get("/", function(req, res) {
        res.render("index");
    });

    // Login POST request to determine if
    // the posted password matches the
    // "c0dingd0j0bellevue" string
    // and if yes create a session variable
    // and if not don't create called:
    // "req.session.password"
    app.post("/login", function(req, res) {
        sessions.login(req, res);
    });

    app.post("/logoff", function(req, res) {
        sessions.logout(req, res);
    });

    /****** customers collection actions ******/

    // customers are displayed on a customers page
    // AND index page
    app.get("/customersObjects", function(req, res) {
            // If sessions ("req.session")
            // doesn't exist redirect to
            // home page & if it does exist
            // proceed
            if(!req.session.password) {
                res.redirect("/");
            }
            else {
                // "customers" references the
                // "customers.js" controller and
                // "show" is a method of said
                // "customers.js" controller
                customers.show(req, res);
            }
    });

    // Save a customer
    app.post("/save", function(req, res) {
        customers.saveCustomer(req, res);
    });

    // Delete a customer
    app.get("/destroy/:id", function(req, res) {
        if(!req.session.password) {
            res.redirect("/");
        }
        else {
            customers.deleteCustomer(req, res);
        }
    });

    // Show a customer to update
    app.get("/customer/:id", function(req, res) {
        if(!req.session.password) {
            res.redirect("/");
        }
        else {
            customers.showSingleCustomer(req, res);
        }
    });

    // Update a customer
    app.post("/customer/update/:id", function(req, res) {
        customers.updateSingleCustomer(req, res);
    });


    /****** products collection actions ******/

    // Show all products
    app.get("/productsObjects", function(req, res) {
        if(!req.session.password) {
            res.redirect("/");
        }
        else {
            products.showProducts(req, res);
        }
    });

    // Save a product
    app.post("/saveProduct", function(req, res) {
        products.saveProduct(req, res);
    });

    // Delete a product
    app.get("/destroy/product/:id", function(req, res) {
        if(!req.session.password) {
            res.redirect("/");
        }
        else {
            products.deleteProduct(req, res);
        }
    });

    // Show a product to update
    app.get("/product/:id", function(req, res) {
        if(!req.session.password) {
            res.redirect("/");
        }
        else {
            products.showSingleProduct(req, res);
        }
    });

    // Update a product
    app.post("/product/update/:id", function(req, res) {
        products.updateSingleProduct(req, res);
    });

    /****** orders collection actions ******/

    // Show all orders
    app.get("/ordersObjects", function(req, res) {
        if(!req.session.password) {
            res.redirect("/");
        }
        else {
            orders.showOrders(req, res);
        }
    });

    // Save an order
    app.post("/saveOrder", function(req, res) {
        products.subtractProductQuantity(req, res);
        orders.saveOrder(req, res);
    });

    app.get("/destroy/order/:id", function(req, res) {
        if(!req.session.password) {
            res.redirect("/");
        }
        else {
            orders.deleteOrder(req, res);
        }
    });

    // Delete an order
    app.post("/destroy/order", function(req, res) {
        orders.deleteOrder(req, res);
    });

};