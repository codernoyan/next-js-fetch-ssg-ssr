import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  )
}
