// client factory

customers_app.factory("ProductFactory", function($http) {
    var factory = {};

    factory.getProducts = function(callback) {
        $http.get("/productsObjects").success(function(output) {
            products = output;
            callback(products);
        });
    };

    factory.addProduct = function(info, callback) {
        $http.post("/saveProduct").success(function(info) {
            products.push({name: info.name, imgUrl: info.imgUrl, description: info.description});
            callback(info);

        });
    };

    return factory;
});