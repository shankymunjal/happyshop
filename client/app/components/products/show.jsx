import React from 'react';
import {Link} from 'react-router';
import WebApi from '../../utils/WebApi';

export default class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        	product: [],
        }
        self = this;
        WebApi.getProduct(this.props.routeParams.id, this.setProduct);
    }

    setProduct(product){
        self.setState({product: product})
    }

	render(){
		return (
			<div className="container">
                <div className="row-fluid">
                    <div  className="col-md-4">
                        <img src="/assets/beauty-product.jpg" alt="SoundReady.fm"/>
                    </div>
                    <div className="col-md-4">
                        <div>
                            {this.state.product.name}
                        </div>
                        <div>
                            ${this.state.product.price}
                        </div>
                    </div>
				</div>
			</div>
		)
	}

}
