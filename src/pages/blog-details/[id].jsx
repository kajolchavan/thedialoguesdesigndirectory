import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import { client } from "../../lib/client";
import LightLayout from "../../layouts/light";
const BlogDetails = ({blogDetails,blogs}) => {
    
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <LightLayout>
      <PostDetails blogDetails={blogDetails[0]} blogs={blogs}  />
    </LightLayout>
  );
};

export const getServerSideProps = async ({params}) =>{

    const blogDetailsQuery = `*[_type == "blogs" &&  _id == '${params.id}']{
     coverImage,
     _id,
     title, 
     mainImage,
     coverContent,
     content
   }`;
   const blogDetails = await client.fetch(blogDetailsQuery);
    const query = '*[_type == "blogs"]';
   const blogs = await client.fetch(query);
   return{
     props:{blogDetails,blogs}
   }
 }

export default BlogDetails;
