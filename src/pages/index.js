import Demos from "./demos";
import HomeSix from "./home6"
import HomeOne from "./home1"
import { client } from "../lib/client";
export default function Home({homeContent,portfolios,blogs}) {
  return <HomeOne homeContent={homeContent} portfolios={portfolios} blogs={blogs} />;
}
export const getServerSideProps = async () => {
  const homeQuery = `*[_type == "homeContent" ]{
    videoList[]
      {
         videoPc{
        asset->{
          _id,
          url
        }
      },
  videoMobile{
        asset->{
          _id,
          url
        }
      }
      }

     
      
      
  }`
  const homeContent = await client.fetch(homeQuery);
  const portfolioQuery = `*[_type == "youtubeVideos" ]`
  const portfolios = await client.fetch(portfolioQuery);
  const blogsQuery = `*[_type == "blogs" ]`
  const blogs = await client.fetch(blogsQuery);
  return {
    props: {homeContent,portfolios,blogs}
  }
}