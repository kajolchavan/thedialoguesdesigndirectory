/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

import PortableText from "react-portable-text";
import { urlFor } from "../../lib/client";

const PostDetails = ({blogDetails,blogs}) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  console.log(blogDetails)
  return (
    <>
      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>{blogDetails?.title}</h2>
                  {/* <div className="info">
                    <p>
                      <Link href="#">Alex Smith</Link>/
                      <Link href="#">August 6 , 2022</Link>/
                      <Link href="#">Web Design</Link>
                    </p>
                  </div> */}
                </div>
                <div className="img main-img">
                  <img
                    src={urlFor(blogDetails?.mainImage)}
                    alt=""
                    className="thumparallax"
                  />
                </div>
                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                      
                      <PortableText
              // Pass in block content straight from Sanity.io
              content={blogDetails?.content}
              projectId="p67wd3hf"
              dataset="production"
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => <li className="special-list-item">{children}</li>,
              
              }}
            />

                        
                        

                       
                     
                     
                      </div>
                  
                    </div>
                  </div>
                </div>

               

                <div className="comments-area">
                  <h5>Comments :</h5>
                  <div className="item">
                    <div className="comment-img">
                      <img src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                  <div className="item relped">
                    <div className="comment-img">
                      <img src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="comment-img">
                      <img src="/assets/img/blog/01.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Jorden Griffin<span> 6 Aug 2022</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          <a>
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </Link>
                      </span>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="comment-form">
                  <h5>Add Comment :</h5>
                  <div className="form">
                    <form action="">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <textarea placeholder="Your Comment"></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="email" placeholder="Your Email" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button className="btn-curve btn-blc btn-lg">
                              <span>Submit</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetails;
