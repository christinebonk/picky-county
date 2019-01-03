import React, { Component } from "react";


class TopBar extends Component {
	
	render () {
		return (
			<header>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Picky County</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/feed">Feed</a></li>
              <li><a href="/add">Add Points</a></li>
              <li><a href="/houses">Manage Houses</a></li>
            </ul>
          </div>
         </nav>     
    	</header>
		)
		
	}


}

	

	


export default TopBar;