import React, { Component } from 'react'

export class Newsitem extends Component {
  
    render() {
        let {title, description,  imageUrl, newsUrl, author, time,source} = this.props; // using js destructuring
        return (
           
              <div className="my-3">
                    <div className="card" >
                <div style={{display: 'flex', position: 'absolute', justifyContent:'flex-end', right: '0'}}>
                    <span className="badge rounded-pill bg-success">{!source?"Unknown":source}</span>
                    </div>
              
                    <img className="card-img-top" src={!imageUrl?"https://analyticsinsight.b-cdn.net/wp-content/uploads/2022/02/Can-Elon-Musk-Help-Dogecoin-make-a-Comeback-in-February.jpg":imageUrl} alt="..."/>
                    <div className="card-body">               
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary btn-dark">Read More</a>
                        <div className="dropdown-divider"></div>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} Last updated {new Date(time).toGMTString()}</small></p>
                    </div>
                </div>           
              </div>
        )
    }
}

export default Newsitem
