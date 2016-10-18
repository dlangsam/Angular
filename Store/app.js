(function(){
  
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = gems; 
  });
  var gems = 


  [
 	 { name: 'Azurite', price: 2.95,
  		description: "Beautiful cut and color", 
  		canPurchase: true,
  		images: ["images/gem1.jpg", "images/gem2.jpg", "images/gem3.jpg" ]
  		},
	 { name: 'Diamond', price: 2000.95,
  		description: "Princess cut. Half carat", 
  		canPurchase: true,
  		images: ["images/gem3.jpg", "images/gem2.jpg"]
  		 },
  	 { name: 'Ruby', price: 500,
  		description: "Red, looks good with rails", 
  		canPurchase: true,
  		images: ["images/gem2.jpg", "images/gem1.jpg"]
  		 }


  ];


  app.controller("PanelController", function(){
  		this.tab = 1; 
  		this.selectTab = function(setTab){
  			this.tab = setTab;
  		};
  		this.isSelected = function(checkTab){
  			return this.tab === checkTab;
  		};
  });

   app.controller("GalleryController", function(){
    this.current = 0;
    this.setCurrent = function(current){
    	if(current !== null){
        	this.current = current;
      	}else{
          this.current = 0;  
     	}
    };
    this.isSet = function(current){
    	return this.current === current;
    };
});
})();
