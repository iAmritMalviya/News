import React, { Component } from 'react'
import {
   
    Link
  } from "react-router-dom";

export class Navbar extends Component {
    render() {
       
      
        return (
            <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <Link className="navbar-brand" to="/home">News Provider</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                                <li className="nav-item active"><Link className="nav-link" to="/home">Home</Link></li>   
                                <li className="nav-item active"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item active"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item active"><Link className="nav-link" to="/general">General</Link></li>
                                <li className="nav-item active"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item active"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item active"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item active"><Link className="nav-link" to="/technology">Technology</Link></li>         
                               
                        </ul>                      
                    </div>
                    <div className="dropleft">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&#127988;</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li className="nav-item active"><Link className="dropdown-item" to="/in">India</Link></li>
                           <li className="nav-item active"> <Link className="dropdown-item" to="/us">US</Link></li>
                        </div>
                    </div>
 </nav>
            </>
        )
    }
}

export default Navbar
