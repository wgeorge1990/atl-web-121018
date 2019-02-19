import React, { Component } from 'react';

const Navbar = (props)=>{

		return(
		<div>
			<div className="ui pointing menu">
			  <a className="active item">
			    Home
			  </a>
			  
			  <div className="right menu">
			    <div className="item">
			      <div className="ui transparent icon input">
			        <input type="text" placeholder="Search..."/>
			        <i className="search link icon"></i>
			      </div>
			    </div>
			  </div>
			</div>
			<div className="ui segment">
			  <p>Winner: </p>
			</div>
		</div>
			)
	}


export default Navbar; 

