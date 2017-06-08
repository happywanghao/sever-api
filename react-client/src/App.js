import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import axios from 'axios'
import Header from './components/Header.js'
import NewPost from './components/NewPost.js'
import PostList from './components/PostList.js'
import Details from './components/Details.js'
import Edit from './components/Edit.js'
import './app.css'
class App extends React.Component{

  // upData(){
  //   let data={
  //   category:"fgfgfg",
  //   content:"wgfgfgf",
  //   title:'wahahaha'
  //   }
  //   axios.put('http://192.168.1.102:5000/post/593607542cf2f60539a17692',data)
  //   .then(res=>console.log(res))
  // }
  // componentDidMount(){
  //   axios.get('http://express-api.haoqicat.com/posts')
  //   .then(res=>{
  //     // console.log(res)
  //     console.log(res.data.posts.map(item=>{axios.delete(`http://express-api.haoqicat.com/post/${item._id}`)}))
  //   })
  // }
  // componentDidMount(){
  //   axios.get('http://192.168.1.102:5000/posts')
  //   .then(res=>console.log(res))
  // }
  render(){
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={PostList}/>
            <Route path='/post/new' component={NewPost}/>
            <Route path="/post/:id/edit" component={Edit}/>
            <Route path="/post/:id" component={Details}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
