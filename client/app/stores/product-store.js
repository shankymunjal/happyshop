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
		}
		return true;
	})
})

module.exports = ProductStore;