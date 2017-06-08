import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
class Form extends React.Component{
  state={
    title:"",
    content: "",
    category: ""
  }
  submit(e){
    e.preventDefault()
    let data={
      title: this.state.title,
      content: this.state.content,
      category: this.state.category
    }
    this.props.formSub(data)
  }
  componentDidMount(){
    if(this.props.editId){
      let id=this.props.editId
      axios.get(`http://express-api.haoqicat.com/post/${id}`)
      .then(res=>this.setState({title:res.data.post.title,content:res.data.post.content,category:res.data.post.category}))
    }
  }
  render(){
    return (
      <div>
        <div className='div1'>
          <div className='div2'>{this.props.title}</div>
          <form onSubmit={this.submit.bind(this)}>
            <div className='div3'>
              <label >分类</label>
              <input value={this.state.category} onChange={e=>this.setState({category:e.target.value})} />
            </div>
            <div className='div3'>
              <label >标题</label>
              <input value={this.state.title} onChange={e=>this.setState({title:e.target.value})}/>
            </div>
            <div className='div3'>
              <label >内容</label>
              <textarea rows="20" value={this.state.content} onChange={e=>this.setState({content:e.target.value})}></textarea>
            </div>

            <div className='div4'>
              <button className='submit' type="submit">{this.props.sub}</button>
              <Link className='quxiao' to="/">取消</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Form
