import React, { Component } from "react";
import ReactDOM from "react-dom";
import Calendar from 'react-calendar';

class Layout extends Component {
	state = {
		date: new Date(),
	}

	onChange = date => this.setState({ date })

	render(){
		return (
			<div>
				<Calendar
					onChange={this.onChange}
					value={this.state.date}
				/>
			</div>
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
