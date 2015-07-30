// server controller

var mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = (function() {
    return {
        showProducts: function(req, res) {
            Product.find({}, function(err, results) {
                if(err) {
                    console.log("Mongo Show Products Error:", err);
                }
                else {
                    res.json(results);
                }
            });
        },

        saveProduct: function(req, res) {

            console.log("req.body:", req.body);

            var product = new Product(req.body);

            product.save(function(err) {
                if(err) {

                    console.log("saveProduct errors:", err);

                    res.json({title: "you have errors", errors: product.errors});
                }
                else {
                    console.log("Product added:", product);
                    res.send(true);
                }

            });

        },

        deleteProduct: function(req, res) {
            Product.remove({_id: req.params.id}, function(err) {
                if(err) {
                    console.log("Product delete error:", err);
                }
                else {
                    console.log("Product deleted!");
                    res.redirect("/#products");
                }

            });
        },

        updateProduct: function(req, res) {

            var submittedProductName = req.body.product;
            var minusSubmittedProductQuantity = parseInt(req.body.quantity) * -1;

            Product.findOneAndUpdate({name: submittedProductName}, {$inc: {"initialQuantity": minusSubmittedProductQuantity } }, {upsert: true}, function(err) {
                if(err) {
                    console.log("upateProduct quantity error:", err);
                }
                else {
                    console.log("submittedProductName:", submittedProductName);
                }

            });



        }

    }

})();