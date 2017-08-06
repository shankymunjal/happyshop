import request from 'superagent';
import ProductAction from '../actions/product-actions';

module.exports = {

	getProducts: function(pageNo, callback){
		if (!pageNo){
			pageNo = '1'
		}
		request.get('/products.json?pageNo=' + pageNo)
		  .set('Accept', 'application/json')
		  .end(function(err, response) {
		    if (err) return console.error(err);
		    ProductAction.receiveProducts(response.body);
		    callback && callback(response.body);
		});
	},

	getProduct: function(productId, callback) {
		request.get('/products/ ' + productId + '.json')
		  .set('Accept', 'application/json')
		  .end(function(err, response) {
		    if (err) return console.error(err);
	    	callback && callback(response.body);
		});
	},

	getCategories: function(callback) {
		request.get('/categories.json')
		  .set('Accept', 'application/json')
		  .end(function(err, response) {
		    if (err) return console.error(err);
		    ProductAction.receiveCategories(response.body);
	    	callback && callback(response.body);
		});
	},

	getPriceRanges: function(callback) {
		request.get('products/pricerange.json')
		  .set('Accept', 'application/json')
		  .end(function(err, response) {
		    if (err) return console.error(err);
		    ProductAction.receivePriceRanges(response.body);
	    	callback && callback(response.body);
		});
	},

	filterProducts: function(filterBy, callback) {
		request.get('products.json')
		  .query(filterBy)
		  .set('Accept', 'application/json')
		  .end(function(err, response) {
		    if (err) return console.error(err);
		    ProductAction.addProducts(response.body);
	    	callback && callback(response.body);
		});
	},
};
