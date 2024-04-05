/* eslint-disable @next/next/no-img-element */
import React from "react";
import Blog1Data from "../../data/blogs1.json";
import Link from "next/link";
import { urlFor } from "../../lib/client";

const Blogs1 = ({blogs}) => {
  return (
    <section className="blog-grid section-padding mb-50">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="wow mediumSubTitle fadeInDown" data-wow-delay=".3s">
                Latest News
              </h6>
              <h4 className="boldSubTitle wow flipInX" data-wow-delay=".5s">
                Our Blogs
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs?.map((blog, index) => (
            <div className="col-lg-4" key={blog._id}>
              <div
                className="item wow fadeInUp"
                data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".1s" : ".5s"}
              >
                <div className="post-img">
                  <div className="img">
                    <img className="roundedMd" src={urlFor(blog?.coverImage)} alt="" />
                  </div>
                </div>
                <div className="cont roundedMd">
                  {/* <div className="info mediumSubTitle">
                    
                    <p >{blog?._createdAt?.slice(0,10)}</p>
                  </div> */}

                  <h5 className="boldSubTitle">
                    <p>{blog?.title}</p>
                    
                  </h5>
                  <p>{blog?.coverContent.slice(0,60)}</p>
                  <Link href={`/blog-details/${blog._id}`}>
                    <a className="more">
                      <span className="mediumSubTitle" >Read More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs1;
