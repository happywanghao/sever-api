import React from 'react';

import Form from './Form';
class NewPost extends React.Component{

  render(){
    return (
      <div>
      <Form {...this.props} title='写文章' sub='发布文章'/>
      </div>
    )
  }
}

export default NewPost
