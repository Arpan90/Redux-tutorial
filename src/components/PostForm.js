import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

function PostForm(props) {

  const [ state, setState ] = useState({ title:"", body:"" });

  function changeHandler(event){
    setState(prevState =>  ({ ...prevState, [event.target.name]: event.target.value }) )
  }

  function submitHandler(event){
    event.preventDefault();

    const post = {
        title: state.title,
        body: state.body
    }
    props.createPost(post);

  }
 
  return (
    <div>
        <h1>Add Post</h1>
        <form onSubmit={submitHandler} >
            <div>
                <label>Title</label><br/>
                <input type="text" name="title" onChange={changeHandler} value={state.title} />
            </div>
            <br />
            <div>
                <label>Body:</label><br/>
                <textarea name="body" onChange={changeHandler} value={state.body} />
            </div>
            <br/>
            <button type="submit" >Submit</button>
        </form>
    </div>
  )
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect( null , { createPost } )(PostForm);

