import React from 'react';
import axios from 'axios'
class Details extends React.Component{
  state={data:{}}
  componentDidMount(){
    let id=this.props.match.params.id
    axios.get(`http://express-api.haoqicat.com/post/${id}`)
    .then(res=>this.setState({data:res.data.post}))
    // .then(res=>console.log(res))
  }
  render(){

    return (
        <div>
          <div style={{position: "relative", width: "100%", minHeight: "200px", maxWidth: "600px", margin: "30px auto", backgroundColor: "rgb(255, 255, 255)", borderRadius: "5px", padding: "16px", boxShadow: "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",}}>
            <div style={{position: "absolute", top: "0px", right: "0px", padding: "4px 6px", color: "rgb(255, 255, 255)", fontSize: "0.8em", backgroundColor: "rgb(237, 90, 90)",}}>{this.state.data.category}</div>
            <div style={{fontSize: "1.3em", paddingTop: "10px", paddingBottom: "20px", textAlign: "center",}}>{this.state.data.title}</div>
            <div style={{fontSize: "1em", color: "rgba(0, 0, 0, 0.8)",}}>{this.state.data.content}</div>
          </div>
        </div>
    )
  }
}
export default Details
