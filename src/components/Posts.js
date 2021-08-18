import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

function Posts(props){

  const [ checkNewPost, setCheckNewPost ] = useState([]); // solely used to trigger rerender

  const { fetchPosts, posts, newPost } = props;
  useEffect(() => {
    fetchPosts(); // this is the fetchPosts extracted from props
  },[fetchPosts]);

  useEffect(()=>{
    if(Object.keys(newPost).length){
      console.log("isHit", newPost);
      posts.unshift(newPost);
      setCheckNewPost(posts);
      setCheckNewPost([1]);
    }
  },[posts, newPost]);

  // useEffect(()=>{
  //   if(checkNewPost){
  //     setCheckNewPost(false);
  //   }
  // },[posts, checkNewPost]);


 const postItems = posts.map(post => {
   return(
    <div key={post.id} >
        <h3>{ post.title }</h3>
        <p>{ post.body }</p>
    </div>)
 }) ;
 
 return (
    <div>
      <h1>Posts</h1>
      { postItems }
    </div>
  )
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state =>({
  posts: state.posts.items,
  newPost: state.posts.item
}); 

export default connect(mapStateToProps, { fetchPosts })(Posts); // this is the fetchPosts imported from postActions.js
