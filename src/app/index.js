import React from "react";
import { render } from "react-dom";

import { Header } from ".\\components\\Header";
import { Home } from ".\\components\\Home";

class App extends React.Component {
	render() {

		/* Remember: This is not returning HTML code 
		In the background this is like JavScript writing HTML code piece by piece
		E.g. create div, use document.getElement..innerHTML = "some text" etc.		
		*/
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home/>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));

console.log("It works!!!");
