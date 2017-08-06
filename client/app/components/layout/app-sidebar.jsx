import React from 'react';
import {Link} from 'react-router';
import ProductStore from '../../stores/product-store';
import WebApi from '../../utils/WebApi';
import ProductAction from '../../actions/product-actions';

function getCategories(){
    return ProductStore.getCategories()
}

function getPriceRanges(){
    return ProductStore.getPriceRanges()
}
export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	categories: [],
        	priceRanges: []
        }
        this._onChange = this._onChange.bind(this);
        this.filterbyCategory = this.filterbyCategory.bind(this);
        this.filterbyPrice = this.filterbyPrice.bind(this);
        this.addProducts = this.addProducts.bind(this);
        this.removeProducts = this.removeProducts.bind(this);
        ProductStore.addChangeListener(this._onChange)
        WebApi.getCategories();
        WebApi.getPriceRanges();
    }

    _onChange(){
        this.setState({categories: getCategories(), priceRanges: getPriceRanges()})
    }

    componentWillUnmount(){
        ProductStore.removeChangeListener(this._onChange)
    }

    addProducts(products){
        ProductAction.addProducts(response.body);
    }

    removeProducts(filterParams){
        ProductAction.removeProducts(filterParams);
    }

    filterbyCategory(e){
        if ($(e.target).is(':checked')){
            WebApi.filterProducts({category: e.target.name})
        }else{
            this.removeProducts({'category': e.target.name})
        }
    }

    filterbyPrice(e){
        if ($(e.target).is(':checked')){
            WebApi.filterProducts({price: e.target.name})
        }else{
            this.removeProducts({'price': e.target.name})
        }
    }

	render(){
        let self = this;
        var categories = this.state.categories.map(function(category){
            return (
            	<a key={category} onClick={self.filterbyCategory} className="list-group-item">
                    <input name={category} type="checkbox" defaultChecked/>&nbsp; {category}
                </a>
            );
        })
        var priceRanges = this.state.priceRanges.map(function(priceRange){
            return (
            	<a key={priceRange} onClick={self.filterbyPrice} className="list-group-item">
                    <input name={priceRange} type="checkbox" defaultChecked/>&nbsp; {priceRange}
                </a>
            );
        })

		return (
			<div id="MainMenu">
			  <div className="list-group panel">
			    <a href="#demo1" className="list-group-item list-group-item-success strong" data-toggle="collapse" data-parent="#MainMenu">
			    	<i className="fa fa-photo"></i> 
			    		Categories
			    	<i className="fa fa-caret-down"></i>
			    </a>
			    <div className="collapse list-group-submenu" id="demo1">
			    	{categories}
			    </div> 
			    <a href="#demo2" className="list-group-item list-group-item strong" data-toggle="collapse" data-parent="#MainMenu">
                    <i className="fa fa-book"></i> 
                    Price Range
                    <i className="fa fa-caret-down"></i>
                </a>
			    <div className="collapse list-group-submenu" id="demo2">
			    	{priceRanges}
			    </div>
			   </div>
			</div>
		)
	}
}
