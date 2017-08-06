var AppConstants = require('../constants/product-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');
var assign = Object.assign;
var EventEmitter = require('events').EventEmitter;

var _products = [];
var _categories = [];
var _priceRanges = [];
var PRODUCT_EVENT = 'product';

function _populateProducts(jsonResponse){
	_products = _products.concat(jsonResponse);
}

function _addProduct(jsonResponse){
	for(var i = jsonResponse.length - 1; i >= 0; i--) {
 	   if(notExists(jsonResponse[i].id)) {
    	   _products.push(jsonResponse[i]);
    	}
	}
}

function notExists(productId){
	var exists = false;
	for(var i = _products.length - 1; i >= 0; i--) {
 	   if(_products[i].id === productId) {
    	   exists = true;
    	}
	}
	return !exists
}

function _removeProduct(filterParams){
	if (filterParams.category){
		for(var i = _products.length - 1; i >= 0; i--) {
	 	   if(_products[i].category === filterParams.category) {
	    	   _products.splice(i, 1);
	    	}
		}
	}else if (filterParams.price){
		var priceArray = filterParams.price.replace(/\$/g, '').split(' - ')
		var minPrice, maxPrice
		for(var i = _products.length - 1; i >= 0; i--) {
	 		minPrice = parseInt(priceArray[0])
	 		maxPrice = parseInt(priceArray[1])
	 	   	if((_products[i].price >= minPrice) && _products[i].price <= maxPrice) {
	    	   _products.splice(i, 1);
	    	}
		}
	}
}

function _populateCategories(jsonResponse){
	_categories = jsonResponse;
}

function _populatePriceRanges(jsonResponse){
	_priceRanges = jsonResponse;
}

var ProductStore = assign({}, EventEmitter.prototype, {
	emitProductChange: function(){
		this.emit(PRODUCT_EVENT)
	},

	addChangeListener: function(callback){
		this.on(PRODUCT_EVENT, callback)
	},

	removeChangeListener: function(callback){
		this.removeListener(PRODUCT_EVENT, callback)
	},

	getProducts: function(){
		return _products
	},

	getCategories: function(){
		return _categories
	},

	getPriceRanges: function(){
		return _priceRanges
	},

	dispatcherIndex: AppDispatcher.register(function(payload){
		var action = payload.action;
		switch(action.actionType){
			case AppConstants.RECEIVE_PRODUCTS:
				_populateProducts(payload.action.json)
				ProductStore.emitProductChange();
				break;
			case AppConstants.RECEIVE_CATEGORIES:
				_populateCategories(payload.action.json)
				ProductStore.emitProductChange();
				break;
			case AppConstants.RECEIVE_PRICE_RANGES:
				_populatePriceRanges(payload.action.json)
				ProductStore.emitProductChange();
				break;
			case AppConstants.REMOVE_PRODUCT:
				_removeProduct(payload.action.json)
				ProductStore.emitProductChange();
				break;
			case AppConstants.ADD_PRODUCT:
				_addProduct(payload.action.json)
				ProductStore.emitProductChange();
				break;
		}
		return true;
	})
})

module.exports = ProductStore;