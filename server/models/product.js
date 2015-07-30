// server model
var mongoose = require("mongoose");

var ProductsSchema = new mongoose.Schema({
    name: { type: String, unique: true, trim: true },
    imgUrl: { type: String, unique: true, trim: true },
    description: { type: String, trim: true },
    created_at: {type: Date, default: Date.now}
});

mongoose.model("Product", ProductsSchema);