import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

   
     
     const  capitalize =(word) =>{
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          }
 const [page, setPage] = useState(1)
 const [articles, setArticles] = useState([])
 const [totalResults, setTotalResults] = useState(0)
 const [loading, setLoading] = useState(true)
//  document.title = `${capitalize(props.category)} - News Provider`

   

      
    const UpdatedNews = async () =>{
        props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        props.setProgress(50)
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(70)
        setArticles( parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    // useEffect(() => {
    //     UpdatedNews(); 
    //      // eslint-disable-next-line
       //having eroor of memory leaks
    // }, [])

    useEffect(() => {  
        let abortController = new AbortController(); 
        UpdatedNews(); 
        // eslint-disable-next-line
        // your async action is here  
        // this is for memory leaks problem
        return () => {  
        abortController.abort();  
        }  


        }, []);// eslint-disable-line react-hooks/exhaustive-deps

//         const [value, setValue] = useState('checking value...');  this is also a method 
// useEffect(() => {
// let isMounted = true;
// fetchValue().then(() => {
//       if(isMounted ){
//       setValue("done!"); // no more error
//       } 
//     });
//    return () => {
//     isMounted = false;
//     };
// }, []);
           
   const fetchMoreData = async () =>
    {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles( articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)          
    }      

        return (
            <>
            <h1 className="text-center" style={{margin: '25px 0px'}}>News Provider - Top {capitalize(props.category)} Headlines</h1>
          {loading && <Spinner/>}
           
               <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
            <div className="container my-3">
               <div className="row">
                    {articles.map((element)=>{
                        return    <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title?element.title.slice(0,35):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/>
                            </div> 
                    })}
               </div>
            </div>
                    </InfiniteScroll>                 
            
            </>
        )
    }
    News.defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 6
      }

      News.propTypes = {
          category: PropTypes.string,
          country: PropTypes.string,
          pageSize: PropTypes.number
      }


export default News
