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


};
