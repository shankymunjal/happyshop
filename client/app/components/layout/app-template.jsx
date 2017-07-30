import React from 'react';
import Header from './app-header';
import Sidebar from './app-sidebar';


export default class Template extends React.Component {

    constructor(props) {
        super(props);
    }

	render(){
		return (
			<div >
				<Header />
				<div className="row">
					<div className="side-menu">
						<Sidebar />
					</div>
					<div className="container-fluid">
						<div className="side-body">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		)
	}

}