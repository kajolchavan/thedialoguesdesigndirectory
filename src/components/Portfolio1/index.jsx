import React from "react";
import portfolio1Data from "../../data/portfolio1.json";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import YouTube from 'react-youtube';
import ModalVideo from "react-modal-video";
import { FaPlay } from "react-icons/fa";
import { urlFor } from "../../lib/client";

const Portfolio1 = ({portfolios}) => {
  console.log(portfolios)
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  
  return (
    <>
  
      <section className="portfolio section-padding">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head text-center">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                  <h6  className="wow fadeInDown mediumSubTitle" data-wow-delay=".3s">
                    Best Works
                  </h6>
                  <h4 className="boldSubTitle wow flipInX" data-wow-delay=".5s">
                    Our Portfolio
                  </h4>
                </div>
              </div>
            </div>
            <div className='row gallery gap-4 ' >
      {portfolios?.map((item,key)=>(
        
        <div key={key} className="col-lg-4 wow fadeInUp col-md-4  my-4 items theaters">
        <a   href={item?.videoLink}>
              <div className="item youtubeItem">
                <div className="img youtubeImage">
              <img src={urlFor(item?.videoThumbnail)} />
                </div>
                <div className="youtubeCont">
                  <h5 className="mediumSubTitle" >
                    <p href="/project-details">{item?.architechName}</p>
                  </h5>
                  <span className="boldSubTitle cartTitle" >{item?.title}</span>
                 
                  <p className="mediumSubTitle" >{item?.description.slice(0,100)} </p>
                </div>
              </div>
              </a>
            </div>
          
      ))  }
            {/* <div className="col-lg-4 col-md-4 wow fadeInUp my-4 items theaters">
              <div className="item youtubeItem">
                <div className="img youtubeImage">
              <img src="https://images.pexels.com/photos/6908552/pexels-photo-6908552.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
                <div className="youtubeCont">
                  <h5 className="mediumSubTitle">
                    <p href="/project-details">By Karan Sharma</p>
                  </h5>
                  <span className="boldSubTitle cartTitle">Advent Villa</span>
                  
                  <p className="mediumSubTitle">Do you have a luxury or unique home for us to feature? Apply to be on the show by sending us an </p>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-4 wow fadeInUp  my-4 items theaters">
              <div className="item youtubeItem">
                <div className="img youtubeImage">
              <img src="https://images.pexels.com/photos/6180667/pexels-photo-6180667.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
                <div className="youtubeCont">
                  <h5 className="mediumSubTitle">
                    <p href="/project-details">By Ayaan Sharma</p>
                  </h5>
                  <span className="boldSubTitle cartTitle">Rajan Townhouse</span>
                
                  <p className="mediumSubTitle">Do you have a luxury or unique home for us to feature? Apply to be on the show by sending us an </p>
                </div>
              </div>
            </div> */}
           
        </div>
          </div>
         
            
      
        </div>
      </section>
    </>
  );
};

export default Portfolio1;
