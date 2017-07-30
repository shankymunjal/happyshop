import React from 'react';
import {Link} from 'react-router';

var Sidebar = React.createClass({
	render: function(){
		return (
			    
		    <nav className="navbar navbar-default" role="navigation">
			    <div className="navbar-header">
			        <div className="brand-wrapper">
			            <button type="button" className="navbar-toggle">
			                <span className="sr-only">Toggle navigation</span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			            </button>
			        </div>

			    </div>

			    <div className="side-menu-container">
			        <ul className="nav navbar-nav">

			            <li>
			            	<Link to="#"><span className="glyphicon  glyphicon-send"></span>Categories</Link>
			            </li>
			            <li className="active">
			            	<Link to="#"><span className="glyphicon  glyphicon-book"></span>Price Range</Link>
			            </li>

			        </ul>
			    </div>
			</nav>
		)
	}
})

module.exports = Sidebar;