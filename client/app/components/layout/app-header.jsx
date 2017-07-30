import React from 'react';
import {Link} from 'react-router';


export default class Header extends React.Component {

    constructor(props) {
        super(props);
    }

	render(){
		return (
			<nav className="navbar navbar-default"> 
				<div className="container-fluid"> 
					<div className="navbar-header"> 
						<button type="button" className="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a href="#" className="navbar-brand">Happy Shop</a>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<form className="navbar-form navbar-left">
							<div className="form-group">
								<input className="form-control" placeholder="Search"/>
							</div>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
					</div>
				</div>
			</nav>
		)
	}

}
