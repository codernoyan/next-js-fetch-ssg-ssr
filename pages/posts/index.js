import React from 'react';
import Post from '../../components/Post/Post';

const Posts = ({posts}) => {
  console.log(posts);
  return (
    <div>
      <h1 className='text-2xl'>The Number of Posts: {posts.length}</h1>
      {
        posts.map(post => <Post
          key={post.id}
          post={post}
        ></Post>)
      }
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await response.json();
  // console.log(data);
  return {
    props: {
      posts: data
    }
  }
}