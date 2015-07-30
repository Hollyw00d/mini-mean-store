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
            var product = new Product(req.body);

            product.isNew = false;

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

        }

    }

})();