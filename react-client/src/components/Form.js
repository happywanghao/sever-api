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
      title: this.title.value,
      content: this.content.value,
      category: this.category.value
    }
    if(this.props.editId){
      let id=this.props.editId
      axios.put(`http://express-api.haoqicat.com/post/${id}`,data)
      .then(
        this.setState({
          title:"",
          content: "",
          category: ""
        })
      )
    }else{
      axios.post('http://express-api.haoqicat.com/post',data)
      .then(()=>{
        this.setState({
          title:"",
          content: "",
          category: ""
        })
        this.props.history.push('/')
      })
    }
    // this.form.reset()
    // console.dir(this.content)
  }
  componentDidMount(){
    if(this.props.editId){
      let id=this.props.editId
      axios.get(`http://express-api.haoqicat.com/post/${id}`)
      .then(res=>this.setState({title:res.data.post.title,content:res.data.post.content,category:res.data.post.category}))
    }
    // console.dir(this.content)
  }
  render(){
    return (
      <div>
        <div className='div1'>
          <div className='div2'>{this.props.title}</div>
          <form onSubmit={this.submit.bind(this)} data-radium="true">
            <div className='div3' data-radium="true">
              <label data-radium="true" >分类</label>
              <input data-radium="true" value={this.state.category} onChange={e=>this.setState({category:e.target.value})} ref={it=>this.category=it} />
            </div>
            <div className='div3' data-radium="true">
              <label data-radium="true" >标题</label>
              <input data-radium="true" value={this.state.title} onChange={e=>this.setState({title:e.target.value})} ref={it=>this.title=it} />
            </div>
            <div className='div3' data-radium="true">
              <label data-radium="true" >内容</label>
              <textarea rows="20" value={this.state.content} onChange={e=>this.setState({content:e.target.value})} ref={it=>this.content=it} data-radium="true"></textarea>
            </div>

            <div className='div4' data-radium="true">
              <button className='submit' type="submit" data-radium="true">{this.props.sub}</button>
              <Link className='quxiao' to="/">取消</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default Form
