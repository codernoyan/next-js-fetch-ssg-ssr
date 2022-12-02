import { useRouter } from 'next/router';
import React from 'react';

const PostDetails = ({ post }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/posts")
  }
  return (
    <div className='m-8'>
      <div className="card w-full bg-primary text-primary-content">
        <div className="card-body">
          <p>PostId: {post?.id}</p>
          <h2 className="card-title">Title: {post?.title}</h2>
          <p>Post: {post?.body}</p>
          <div className="card-actions justify-end">
            <button onClick={handleBack} className="btn btn-primary">Back to Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`);
  const data = await response.json();
  // console.log(data);
  return {
    props: {
      post: data
    }
  }
}

// get post id's
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json()
  const paths = posts?.map(post => {
    return {
      params: {
        postId: `${post.id}`
      }
    }
  });
  return {
    paths,
    fallback: false
  }

}

export default PostDetails;