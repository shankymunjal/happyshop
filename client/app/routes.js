import React from 'react';
import Template from './components/layout/app-template';
import Products from './components/products/index';
import Product from './components/products/show';
import {Route, browserHistory, Router} from 'react-router';

export default (
	<Router history={browserHistory}>
		<Route component={Template}>
			<Route path="/" component={Products} />
			<Route path="products" component={Products} />
			<Route path="products/:id" component={Product} />
		</Route>
	</Router>
)
