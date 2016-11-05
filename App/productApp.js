var productApp = {};
productApp.ProductRepository = function () {
    this.data = []; //public & instance
    var self = this;
   
    function init() {
        self.data.push({ Id: 1, Name: 'IPhone', Price: 1000 });
        self.data.push({ Id: 2, Name: 'Mac', Price: 2000 });

        //testData.push(); 
    }

    init();


    this.getProducts = function () {
        var prodObj = new productApp.ProductRepository();
        var data = prodObj.data;
        var table = "<table border='1'><tr><th>Id</th><th>Name</th><th>Price</th><th>Action</th></tr>";
            data.forEach(function (entry) {
                var tr = "<tr><td>" + entry.Id + "</td><td>" + entry.Name + "</td><td>" + entry.Price + "</td><td><a href='javascript:void(0)' onclick='updateProduct('+entry.id+')'>Edit</a> |<a href='javascript:void(0)' onclick='viewProduct('+entry.id+')'>View</a> |<a href='javascript:void(0)' onclick='deleteProduct('+entry.id+')'>Delete</a></td>/</tr>";

                table += tr;
            });
            table += "</table>";
            document.getElementById("grid").innerHTML = table;
        
       // onclick='deleteProduct('+entry.id+")'>Delete</a>"
        
		 
      
       
        
    }

    function showAddNewForm() {
        document.getElementById("addNewProductForm").style.display="block";
    }

    this.addNewProduct = function () {

            document.getElementById("addNewProductForm").style.display="none";

            var idArg = document.getElementById("id");
            var nameArg= document.getElementById("name");
            var priceArg= document.getElementById("price");

            var id = idArg.value;
            var name = nameArg.value;
            var price = priceArg.value;

            self.data.push({Id: id, Name: name, Price: price});

            loadGrid();
    }
    //for search use $.grep like in HTMLPage 9           this is better for ojects use this                         
    
    //$.inArray()
    //javascript.. onlick='editProduct('"++">Edit</a
    
    //Show Edit Form
    this.showUpdateProductForm = function () {
        document.getElementById("editProductForm").style.display="block";
    }

    this.updateProduct = function () {
            document.getElementById("editProductForm").style.display="none";

            var idArg = document.getElementById("id");
            var nameArg= document.getElementById("name");
            var priceArg= document.getElementById("price");

            var id = idArg.value;
            var name = nameArg.value;
            var price = priceArg.value;

            self.data.push({Id: id, Name: name, Price: price});

            loadGrid();
    }


    

    this.getProductById = function () {

    }

    this.deleteProduct = function (id) {

    }

}