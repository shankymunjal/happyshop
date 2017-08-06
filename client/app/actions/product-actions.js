import Constants from '../constants/product-constants';
import AppDispatcher from '../dispatchers/app-dispatcher';
import WebApi from '../utils/WebApi';
import request from 'superagent';

var ProdcutActions = {
	receiveProducts: function(json, errors){
		AppDispatcher.handleViewAction({
			actionType: Constants.RECEIVE_PRODUCTS,
			json: json,
			errors: errors
		})
	},

	receiveCategories: function(json, errors){
		AppDispatcher.handleViewAction({
			actionType: Constants.RECEIVE_CATEGORIES,
			json: json,
			errors: errors
		})
	},
	receivePriceRanges: function(json, errors){
		AppDispatcher.handleViewAction({
			actionType: Constants.RECEIVE_PRICE_RANGES,
			json: json,
			errors: errors
		})
	}	

}


module.exports = ProdcutActions;