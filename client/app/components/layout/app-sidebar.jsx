import React from 'react';
import {Link} from 'react-router';
import ProductStore from '../../stores/product-store';
import WebApi from '../../utils/WebApi';

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

	render(){
        var categories = this.state.categories.map(function(category){
            return (
            	<a key={category} className="list-group-item"><input type="checkbox"/>&nbsp; {category}</a>
            );
        })
        var priceRanges = this.state.priceRanges.map(function(priceRange){
            return (
            	<a key={priceRange} className="list-group-item"><input type="checkbox"/>&nbsp; {priceRange}</a>
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
			    <a href="#demo2" className="list-group-item list-group-item strong" data-toggle="collapse" data-parent="#MainMenu"><i className="fa fa-book"></i> Readability <i className="fa fa-caret-down"></i></a>
			    <div className="collapse list-group-submenu" id="demo2">
			    	{priceRanges}
			    </div>
			   </div>
			</div>
		)
	}
}
