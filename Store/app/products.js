(function(){
	var app = angular.module('store-products', [ ]);

    //Directives
    app.directive('productTitle', function(){
    	return{
    		restrict: 'E',
    		templateUrl: '../views/product-title.html'
    	};
    });

    app.directive("productDescription", function() {
    	return {
      		restrict: 'E',
      		templateUrl: "../views/product-description.html"
    	};
  	});

  	app.directive("productPanels", function(){
  		return {
  			restrict: 'E',
  			templateUrl: '../views/product-panels.html',
  			controller:function(){
  				this.tab = 1; 
  				this.selectTab = function(setTab){
  					this.tab = setTab;
  				};
  				this.isSelected = function(checkTab){
  					return this.tab === checkTab;
  				};
  			},
  			controllerAs: 'panel'
  		};
  	});

  	app.directive("productGallery", function(){
  		return{
  			restrict: 'E',
  			templateUrl: '../views/product-gallery.html',
  			controller: function(){
  					this.current = 0;
    				this.setCurrent = function(current){
    					this.current = current || 0;
    				};
    				this.isSet = function(current){
    					return this.current === current;
    				};
  				
  			},
  			controllerAs: 'gallery'
  		};
  	});

})();