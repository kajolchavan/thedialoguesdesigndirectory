import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import BlogsList from '../../components/Blogs-List'
import LightLayout from "../../layouts/light";
import { client } from "../../lib/client";
const Blogs = ({blogs}) => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <LightLayout>
        {/* <PageHeader
          title="Our Blogs"
          fullPath={[
            { id: 1, name: "home", url: "/" },
            { id: 2, name: "blogs", url: "/blogs" },
          ]}
          image="https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        /> */}
       {blogs?.length !== 0 ?  <BlogsList blogs={blogs}  /> : 
       (<div className='container' >
          <h3 className='bannerPadding text-center' >No Blogs Yet</h3>
       </div>)}
      </LightLayout>
    );
}
export const getServerSideProps = async () => {
  

  const blogsQuery = `*[_type == "blogs" ]`
  const blogs = await client.fetch(blogsQuery);
  return {
    props: {blogs}
  }
}
export default Blogs;