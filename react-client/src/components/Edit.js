import React from 'react';
import Form from './Form';
class Edit extends React.Component{
  render(){
    return (
      <div>
      <Form {...this.props} editId={this.props.match.params.id} title='修改文章' sub='确认修改'/>
      </div>
    )
  }
}
export default Edit
