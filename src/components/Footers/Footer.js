
import React, {useState, useEffect} from 'react'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
export default function Footer() {

  const [info, setInfo] = useState({
    ikm: "...",
    ipp: "...",
    irb: "...",
    kod: "...",
    sakip: "..."
})

const [swiperContent, setSwiperContent] = useState([]);
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold"> PEMERINTAH KABUPATEN  </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              BANYUMAS
              </h5>


        
              <div className="w-full flex items-center justify-center" style={{height: '55%'}}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    autoplay={{ 
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop
                    className="mb-10 h-full w-11/12 lg:w-8/12 mx-auto"
                >
                    <SwiperSlide className="w-4/12 p-2">
                    <a href="https://www.bpk.go.id" target="_blank">
                    <div className="bg-white rounded-lg">
                            <p className="text-sm font-light text-center">BPK</p>
                            <div>
                            <img
                        alt="..."
                        src={require("assets/img/bpk.png").default}
                        className="w-full bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-1"
                      />
                            </div>
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                      <a href="https://web.kpk.go.id/id" target="_blank">
                    <div className="bg-white rounded-lg">
                            <p className="text-sm font-light text-center">KPK</p>
                            <div>
                            <img
                        alt="..."
                        src={require("assets/img/KPK.png").default}
                        className="w-full bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-1"
                      />
                            </div>
                        </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="w-4/12 p-2">
                    <a href="https://www.bpkp.go.id/" target="_blank">
                    <div className="bg-white rounded-lg">
                            <p className="text-sm font-light text-center">BPKP</p>
                            <div>
                            <img
                        alt="..."
                        src={require("assets/img/bpkp.png").default}
                        className="w-full bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-0"
                      />
                            </div>
                        </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>

              
              
            </div>
            
            
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-row items-top mb-6">
                <div className="">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    KONTAK KAMI
                  </span>
                  <h6>
                  Kecamatan Purwojati Kabupaten Banyumas
                    </h6>
                  <h6 className="mt-2">
                    Telp.  <br></br>
                    
                  </h6>

                  <a href=" https://www.google.com/maps/place/Kec.+Purwojati,+Kabupaten+Banyumas,+Jawa+Tengah/@-7.489443,109.1134321,13z/data=!3m1!4b1!4m5!3m4!1s0x2e6566611f173017:0x4027a76e352e3e0!8m2!3d-7.4898285!4d109.1176387" target="blank">
                    <br></br>
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Map
                  </span>
                  <ul className="">
                    <li className="flex items-center">
                      
                    <img
                        alt="..."
                        src={require("assets/img/map.png").default}
                        className="w-full align-middle rounded-t-lg"
                      />
                    </li>
                    <li className="flex items-center">
                      
                      
                        <i className="lg:text-blueGray-600 fab fa-chrome text-lg leading-lg mr-1" />
                        Menuju Map
                      
                    </li>
                   
                  </ul>
                  </a>
                </div>

                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  
                </div>
                
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} INSPEKTORAT DAERAH KOTA BANJAR{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
