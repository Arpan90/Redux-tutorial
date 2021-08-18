import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch =>{ // this is called a curried function
    // return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
    };
// }

export const createPost = (postData) => dispatch =>{ // this is called a curried function
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }))
};