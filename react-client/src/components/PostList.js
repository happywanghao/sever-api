import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/zh-cn'
class PostList extends React.Component{
  constructor(){
    super()
    this.state={
      deta:[],
      del:'none'
    }
  }
  componentDidMount(){
    axios.get('http://express-api.haoqicat.com/posts')
    .then(res=>this.setState({data:res.data.posts}))
  }
  delList(id,e){
    this.delId=id
    e.preventDefault()
    this.setState({del:"block"})
  }
  sure(n){
    if(n==='y'){
      axios.delete(`http://express-api.haoqicat.com/post/${this.delId}`)
      .then((a)=>{
        axios.get('http://express-api.haoqicat.com/posts')
        .then(res=>this.setState({data:res.data.posts}))
        }
      )
      this.setState({del:"none"})
    }else if(n==='n'){
      this.setState({del:"none"})
    }
  }
  render(){
    let style1={display: "block", margin: "30px auto", width: "120px", height: "36px", lineHeight: "36px", textAlign: "center", backgroundColor:"rgb(255, 64, 129)", fontSize: "1em", color: "rgb(255, 255, 255)", textDecoration: "none", borderRadius: "20px",}
    let style2={position: "relative", width: "100%", height: "60px", maxWidth:"600px", margin:"20px auto", backgroundColor:"rgb(255, 255, 255)", borderRadius:"5px", padding:"16px",boxShadow:"rgba(0, 0, 0, 0.117647) 0px 1px 6px"}
    let style3={fontSize:"1.2em"}
    let style4={position:"absolute", bottom:"16px", right:"16px",}
    let style5={display:"inline-block", fontSize:"0.9em", color:"rgb(0, 188, 212)", opacity:"0.8", textDecoration:"none", paddingLeft:"10px", paddingRight:"10px",}
    let style6={display:"inline-block", fontSize:"0.9em", color:"rgb(0, 188, 212)", opacity:"0.8", textDecoration:"none", paddingLeft:"10px", paddingRight:"10px",}
    let style7={display:"inline-block", fontSize:"0.9em", color:"rgb(0, 188, 212)", opacity:"0.8", textDecoration:"none", paddingLeft:"10px", paddingRight:"10px",}
    let style8={position:"fixed",margin:"auto", top:"0",  bottom:"0", left:"0",right:"0", backgroundColor:"rgba(0, 0, 0, 0.6)", display:this.state.del, justifyContent:"center", alignItems:"center", zIndex:"999",}
    let style9={width:"100%", maxWidth:"350px", height:"100px", padding:"16px", backgroundColor:"rgb(255, 255, 255)", border:"1px solid rgb(221, 221, 221)", borderRadius:"5px", color:"rgb(244, 67, 54)",position:"fixed",margin:"auto", top:"0",  bottom:"0", left:"0",right:"0",}
    let style10={position: "absolute", bottom: "16px", right: "16px",}
    let style11={cursor:"pointer",textDecoration:'none', display: "inline-block", paddingLeft: "10px", paddingRight: "10px", color: "rgb(0, 188, 212)", fontSize: "0.9em",}
    let style12={opacity:'0.3',fontSize:'6px',position: "absolute", bottom: "16px", left: "16px"}
    let showData
    if(this.state.data){
      showData=[...this.state.data]
      showData.sort((a,b)=>(+a.createdAt.replace(/\D/g,'') < +b.createdAt.replace(/\D/g,'')))
    }
    return (
      <div>
        <div>
          <Link to="/post/new" style={style1}>写文章</Link>
          {
            showData?
            showData.map(item=>(
              <div key={item._id} style={style2}>
                <div style={style3}>{item.title}</div>
                <div style={style12}>创建时间:{moment(item.createdAt).startOf('minute').fromNow()}</div>
                <div style={style4}>
                  <Link to={`/post/${item._id}`} style={style5}>查看</Link>
                  <Link to={`/post/${item._id}/edit`} style={style6}>编辑</Link>
                  <a href='' onClick={this.delList.bind(this,item._id)} style={style7}>删除</a>
                </div>
              </div>
            ))
            :null
          }
          <div style={style8}>
            <div style={style9}>
              <p>确定删除吗？</p>
              <div style={style10}>
                <div onClick={this.sure.bind(this,"y")} style={style11}>确定</div>
                <div onClick={this.sure.bind(this,"n")} style={style11}>取消</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PostList
