import Head from "next/head";
import { useRouter } from "next/router";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

export default function Home({ posts }) {
  const router = useRouter();

  const handleSeeMore = () => {
    router.push('/posts')
  }
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Banner></Banner>
      <div>
        {
          posts.map(post => <div key={post?.id} className="card w-full bg-base-100 shadow-xl mt-10 mx-10">
            <div className="card-body">
              <h2 className="card-title">{post?.title}</h2>
              <div className="card-actions justify-end">
                <p>{post?.body}</p>
              </div>
            </div>
          </div>)
        }
        <div className="text-center my-4">
          <button onClick={handleSeeMore} className="btn btn-primary">See More</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
  const data = await response.json();
  // console.log(data);
  return {
    props: {
      posts: data
    }
  }
}