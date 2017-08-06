import React from 'react';
import {Link} from 'react-router';
import WebApi from '../../utils/WebApi';
import ProductStore from '../../stores/product-store';
import InfiniteScroll from 'react-infinite-scroller';

function getProducts(){
    return ProductStore.getProducts()
}

export default class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	products: [],
            hasMorePages: true,
            page: 0,
        }
        this.loadMoreProducts = this.loadMoreProducts.bind(this);
        this.increasePageNo = this.increasePageNo.bind(this);
        this._onChange = this._onChange.bind(this);
        ProductStore.addChangeListener(this._onChange)
        WebApi.getProducts(this.state.page + 1, this.increasePageNo);
    }

    componentWillUnmount(){
        ProductStore.removeChangeListener(this._onChange)
    }

    _onChange(){
        this.setState({products: getProducts()})
    }

    increasePageNo(){
      let nextPage = this.state.page + 1;
      this.setState({page: nextPage});
    }

    loadMoreProducts(){
        let currPage = this.state.page;
        if(currPage*10 >= this.state.products.length){
            return WebApi.getProducts(currPage + 1, this.increasePageNo)
        }
        else{
            this.setState({hasMorePages: false});
        }

    }

	render(){
        var products = this.state.products.map(function(product){
            return (
                <div key={product.id} className="col-md-3">
                    {product.name} - ${product.price}
                    <Link to={"/products/" + product.id} className="thumbnail">
                        <img src="assets/beauty-product.jpg" alt="SoundReady.fm"/>
                    </Link>
                </div>
            );
        })
		return (
			<div className="container">
                <div className="row-fluid">
                    <InfiniteScroll
                        pageStart={0}
                        initialLoad={false}
                        loadMore={this.loadMoreProducts}
                        hasMore={this.state.hasMorePages}
                        threshold ={10}
                        useWindow={true}
                        loader={<div className="loader"><i className="fa fa-spinner"></i></div>}>
                        {products}
                    </InfiniteScroll>
				</div>
			</div>
		)
	}

}
