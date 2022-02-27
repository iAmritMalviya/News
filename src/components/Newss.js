import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 9
      }

      static propTypes = {
          category: PropTypes.string,
          country: PropTypes.string,
          pageSize: PropTypes.number
      }
     
       capitalize =(word) =>{
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          }
     

   
    constructor(props)
    {
        super(props);
        this.state={
            articles:[],
            loading : false,  
            
            page: 1,          
        }   
        document.title = `${this.capitalize(this.props.category)} - News Provider`
    }
      
    async UpdatedNews(){
        console.log(`"first`+this.state.page);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f6a67f6d9dc4eb79b02f6c9f3f91faf&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false})
            console.log("last"+this.state.page);
            

    }
    
    async componentDidMount()
    {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f6a67f6d9dc4eb79b02f6c9f3f91faf&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})

        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false})
            
    }
    HandlePrevClick = async () =>
    {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f6a67f6d9dc4eb79b02f6c9f3f91faf&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // // console.log(parsedData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading:false
        // })
        this.setState({
            page: this.state.page - 1
        })
        this.UpdatedNews();

    } 
    
    HandleNextClick = async () =>
    { 
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
       {
                    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f6a67f6d9dc4eb79b02f6c9f3f91faf&page= ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
                    //  this.setState({loading:true})                    
                    // let data = await fetch(url);
                    // let parsedData = await data.json();
                    // console.log("next");
                    // console.log(this.state.page);
                    // this.setState
                    // ({
                    //     page: this.state.page + 1,
                    //     articles: parsedData.articles,
                    //     loading:false
                    //    })
                    this.setState({
                        page: this.state.page + 1
                    })
                    this.UpdatedNews();


       }
   }
        
    render() {
        return (
            <div className="container my-3">
            <h1 className="text-center" style={{margin: '25px 0px'}}>News Provider - Top {this.capitalize(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner/>}
           
               <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return    <div className="col md-4" key={element.url}>
                                <Newsitem title={element.title?element.title.slice(0,35):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/>
                            </div> 
                    })}
                   
               </div>
               <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.HandlePrevClick}> &larr; Previous</button>
                        <button disabled={(this.state.page + 1) > (Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.HandleNextClick}>Next &rarr;</button>
                        </div>
            </div>
        )
    }
}

export default News
