import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/client";
const PageHeader = ({ title, fullPath, image, imageMobile }) => {
  const router = useRouter();
  return (
    <>
    <header
      className="pages-header headerPc bg-img valign parallaxie"
      style={{
        backgroundImage: `url(${!image ? "/assets/img/pg1.jpg" : urlFor(image)})`,
        backgroundPosition:"center"
      }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 paddingBanner">
            <div className="cont text-center">
              <h1>{title}</h1>
              <div className="path">
                {fullPath.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <Link href={item.url}>
                      <a
                        className={router.pathname == item.url ? "active" : ""}
                      >
                        {item.name}
                      </a>
                    </Link>
                    {index != fullPath.length - 1 ? <span>/</span> : ""}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header
      className="pages-header headerMobile bg-img valign parallaxie"
      style={{
        backgroundImage: `url(${!imageMobile ? "/assets/img/pg1.jpg" : urlFor(imageMobile)})`,
        backgroundPosition:"center"
      }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 paddingBanner">
            <div className="cont text-center">
              <h1>{title}</h1>
              <div className="path">
                {fullPath.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <Link href={item.url}>
                      <a
                        className={router.pathname == item.url ? "active" : ""}
                      >
                        {item.name}
                      </a>
                    </Link>
                    {index != fullPath.length - 1 ? <span>/</span> : ""}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default PageHeader;
