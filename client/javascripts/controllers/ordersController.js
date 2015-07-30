// client controller
customers_app.controller("ordersController", function($scope, CustomerFactory, ProductFactory, OrderFactory) {


    /****** Use CustomerFactory ******/
    CustomerFactory.getCustomers(function (data) {
        $scope.customers = data;
    });

    $scope.addCustomer = function() {

        // Client side error to check if
        // a customer name already exists
        var duplicate_found = false;

        // For statement iterates through
        // all customers in the database and
        // checks if the submitted customer name
        // matches a customer name in the DB
        // and displays an error and stops
        // form submission
        for(var i in $scope.customers) {
            if($scope.new_customer.name === $scope.customers[i].name) {
                duplicate_found = true;
                $scope.error = "This is already a customer with that name.";

                console.log("$scope.error:", $scope.error);
            }
        }

        CustomerFactory.addCustomer($scope.new_customer, function (errors) {

            $scope.errors = errors;

            CustomerFactory.getCustomers(function (data) {
                $scope.customers = data;
            });

            $scope.new_customer = {};

        });

    };

    /****** Use ProductFactory ******/
    ProductFactory.getProducts(function(data) {
        $scope.products = data;
    });

    $scope.addProduct = function() {

        ProductFactory.addProduct($scope.new_product, function(errors) {
            $scope.errors = errors;

            ProductFactory.getProducts(function(data) {
                $scope.products = data;
            });


        });


        $scope.new_product = {};

    };


    /****** Use OrderFactory ******/
    OrderFactory.getOrders(function(data) {
        $scope.orders = data;
    });

    $scope.addOrder = function() {

        OrderFactory.addOrder($scope.new_order, function(errors) {
            $scope.errors = errors;

            OrderFactory.getOrders(function(data) {
                $scope.orders = data;
            });

            console.log("$scope.new_order:", $scope.new_order);

            $scope.new_order = {};


        });
    };


});