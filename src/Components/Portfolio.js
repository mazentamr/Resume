import React from "react";
import { Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'


const Portfolio = ({ data }) => {
  // if (data) {
  //   var projects = data.projects.map(function (projects) {
  //     var projectImage = "images/portfolio/" + projects.image;
  //     return (
  //       <div key={projects.title} className="columns portfolio-item">
  //         <div className="item-wrap">
  //           <a href={projects.url} title={projects.title}>
  //             <img alt={projects.title} src={projectImage} />
  //             <div className="overlay">
  //               <div className="portfolio-item-meta">
  //                 <h5>{projects.title}</h5>
  //                 <p>{projects.category}</p>
  //               </div>
  //             </div>
  //             <div className="link-icon">
  //               <i className="fa fa-link"></i>
  //             </div>
  //           </a>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >

            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3  ,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {

                data?.projects.map(item => (
                  <SwiperSlide key={item.title}>
                    <div className="columns portfolio-item"
                      style={{ width: "300px", height: "200px" }}
                    >
                      <div className="item-wrap">
                        <a href={item.url} title={item.title}>
                          <img alt={item.title} src={`images/portfolio/${item.image}`} />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.title}</h5>
                              <p>{item.category}</p>
                            </div>
                          </div>
                          <div className="link-icon">
                            <i className="fa fa-link"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>

          </div>
        </div>
      </div>
    </section >
  );
};

export default Portfolio;
