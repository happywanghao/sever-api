import React from 'react';
import Form from './Form';
import axios from 'axios';
class Edit extends React.Component{
  editSub(data){
    let id=this.props.match.params.id
    axios.put(`http://express-api.haoqicat.com/post/${id}`,data)
    .then(()=>{
      this.props.history.push('/')
    })
  }
  render(){
    return (
      <div>
      <Form formSub={this.editSub.bind(this)} editId={this.props.match.params.id} title='修改文章' sub='确认修改'/>
      </div>
    )
  }
}
export default Edit
