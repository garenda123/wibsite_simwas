import React, { Text, useState, useEffect } from "react";
import Axios from "axios";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { SearchIcon } from "@heroicons/react/outline";
import moment from "moment";

import Navbar from "components/Navbars/Nav.js";
import Footer from "components/Footers/Footer.js";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

import { ROOT_URL, API_URL } from "config/config";
import { data } from "autoprefixer";

SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

export default function Beranda() {
  const [dataPeraturan, setDataPeraturan] = useState([]);
  const [counter, setCounter] = useState(null);
  const [keywords, setKeywords] = useState("");
  const [swiperContent, setSwiperContent] = useState([]);
  const [info, setInfo] = useState({
    ikm: "...",
    ipp: "...",
    irb: "...",
    kod: "...",
    sakip: "...",
  });

  useEffect(() => {
    getSwiper();
  }, [0]);

  const getSwiper = () => {
    Axios.get(`${API_URL}/list/cv_swiper`)
      .then((res) => {
        const data = res.data;
        setSwiperContent(data.cv_swiper);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  // let { params } = useParams();
  // const [keywords, setKeywords] = useState(params ? params : "");
  const [dataInformasi, setDataInformasi] = useState([]);
  const [startPage, setStartPage] = useState(1);
  const [totalRecordCount, setTotalRecordCount] = useState(0);

  const [dataPromosi, setDataPromosi] = useState([]);

  useEffect(() => {
    checkInfo();
  }, []);

  // useEffect(() => {
  //   checkPromo()
  // }, []);

  const checkInfo = () => {
    try {
      Axios.get(
        `${API_URL}/list/cv_berita?cmd=search&t=cv_berita&x_kategori_berita_id=${keywords}`
      )
        .then((res) => {
          // console.log(res.data);
          const data = res.data;
          setTotalRecordCount(data.totalRecordCount);
          setDataInformasi(data.cv_berita);
          // console.log(data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  
  console.log(dataInformasi);

  const handlePagination = (btn) => {
    if (btn == "next") {
      try {
        Axios.get(`${API_URL}/api/list/cv_informasi?start=${startPage + 7}`)
          .then((res) => {
            const data = res.data.cv_informasi;
            console.log(data);
            setDataInformasi(data);
            setStartPage(startPage + 7);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        Axios.get(`${API_URL}/api/list/cv_informasi?start=${startPage - 7}`)
          .then((res) => {
            const data = res.data.cv_informasi;
            console.log(data);
            setDataInformasi(data);
            setStartPage(startPage - 7);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(swiperContent);

 

  return (
    <>
      <br></br>
      <br></br>
      <br></br>

   

      <Navbar transparent />
      <div className="h-screen">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          className="mb-10 h-screen"
          style={{
            height: "83%",
          }}
        >
          {swiperContent.map((item) => (
            <SwiperSlide>
              <div
                className="w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: `url(${
                    (item.gambar.replace(" ", "%10"),
                    item.gambar.replace("amp;", ""))
                  })`,
                }}
              >
                {/* <div
                className="w-full h-full bg-center bg-cover"
                style={{
    
                  backgroundImage: `url(https://simwas.inspektorat.banjarkota.go.id/swiper/${item.gambar})`,
                }}
              > */}

                <div
                  className="h-full flex flex-col items-center justify-center"
                  style={{ backgroundColor: "rgba(0,0,0,.1)" }}
                >
                  <div
                    className="p-4 w-10/12 mx-auto"
                    style={{ backgroundColor: "rgba(0,0,0,.5)" }}
                  >
                    <h1 className="text-white font-semibold text-xl mx-auto">
                      {item.judul}
                    </h1>
                    <p className="mt-4 text-lg text-blueGray-200">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <br></br>

        <div
          className="w-full flex items-center justify-center"
          style={{ height: "15%" }}
        >
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            className="mb-10 h-full w-11/12 lg:w-8/12 mx-auto"
          >
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Indeks Kepuasan Masyarakat (IKM)
                </p>
                <p className="font-semibold text-lg text-center">{info.ikm}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP)
                </p>
                <p className="font-semibold text-lg text-center">
                  {info.sakip}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Indeks Reformasi Birokrasi (IRB)
                </p>
                <p className="font-semibold text-lg text-center">{info.irb}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Indeks Pelayanan Publik (IPP)
                </p>
                <p className="font-semibold text-lg text-center">{info.ipp}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-4/12 p-2">
              <div className="w-11/12 bg-white rounded-lg shadow-lg h-full flex flex-col items-center justify-center p-2">
                <p className="text-sm font-light text-center">
                  Kematangan Organisasi Daerah (KOD)
                </p>
                <p className="font-semibold text-lg text-center">{info.kod}</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <br></br>

      {/* <div className="bg-blueGray-200 py-6 mt-10" id="cari">
        <h1 className="text-center text-2xl text-blueGray-800 font-semibold mb-6">
          Cari Berita yang diinginkan
        </h1>
        <div className="bg-white shadow-lg rounded flex p-3 h-16 w-10/12 max-w-580-px mx-auto">
          <input
            type="text"
            className="px-2 text-lg font-light text-gray-800 bg-white flex-1 focus:outline-none rounded h-full mr-2"
            placeholder="Data Berita..."
            value={keywords}
            onInput={(e) => setKeywords(e.target.value)}
          />
          <a
            href={`/pencarian/${keywords}`}
            className="w-16 flex justify-center items-center rounded bg-blueGray-800 text-white text-base h-full p-2"
          >
            <SearchIcon
              className="block h-6 w-6 text-white"
              aria-hidden="true"
            />{" "}
            Cari
          </a>
        </div>
      </div> */}

      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-30">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?export=view&id=1WeIQcIEB6Tclb8_A7RZ30a1YVjhLWYkF')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>

        

        
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="p-8" id="about">
        <Footer />
      </div>
    </>
  );
}
