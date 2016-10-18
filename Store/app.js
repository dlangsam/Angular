(function(){
  
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = gems; 
  });
  var gems = 


  [
 	 { name: 'Azurite', price: 2.95,
  		description: "Beautiful cut and color", 
  		canPurchase: true
  		},
	 { name: 'Diamond', price: 2000.95,
  		description: "Princess cut. Half carat", 
  		canPurchase: true
  		 }


  ];
})();
