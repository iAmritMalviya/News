import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Home from './components/Home'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  pageSize = 9;
  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({
      progress:progress
    })
  }
  // apiKey = "6f6a67f6d9dc4eb79b02f6c9f3f91faf"
  apiKey = "ff4147ff43e14e7cbeb2f48cfb491c08"
  // apiKey = "c5c2ac050e2347e78cd7069161afbc4b"
  // apiKey = "6d1c904f85a641d191fa676d575a3c62"
  // apiKey = process.env.REACT_APP_NEWS_API
 
  render() {
    return (
     <>
       <BrowserRouter>
       <Navbar/>   
           
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
       <Routes>
            <Route path="/home"  element={<Home/>} />
            <Route path="/business"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="in" category="business"/>} />
            <Route path="/entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.pageSize} country="in" category="general"/>} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country="in" category="health"/>} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country="in" category="science"/>} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />            
        </Routes>
       </BrowserRouter>
       
     </>
    )
  }
}

export default App

// REACT_APP_NEWS_API="6f6a67f6d9dc4eb79b02f6c9f3f91faf"
