import React from 'react';
import axios from 'axios'
import Form from './Form';
class NewPost extends React.Component{
  newPost(data){
    axios.post('http://express-api.haoqicat.com/post',data)
    .then(()=>{
      this.props.history.push('/')
    })
  }
  render(){
    return (
      <div>
      <Form formSub={this.newPost.bind(this)} title='写文章' sub='发布文章'/>
      </div>
    )
  }
}

export default NewPost
