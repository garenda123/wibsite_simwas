import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
// components
import Navbar from "components/Navbars/Nav.js";
// import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

// import { data } from "autoprefixer";
import { ROOT_URL, API_URL } from "config/config";

export default function Tiket() {
  let { tiket } = useParams();

  const [dataInformasi, setDataInformasi] = useState([]);

  useEffect(() => {
    checkInfo();
  }, []);

  const checkInfo = () => {
    console.log(tiket);
    try {
      Axios.get(`${API_URL}/view/v_tiket/${tiket}`)
        .then((res) => {
          const data = res.data;
          setDataInformasi(data.v_tiket);
          console.log(data);
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
  return (
    <>
      <br></br>
      <br></br>

      <Navbar transparent />
      <main>
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
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  {/*   <h1 className="text-white font-semibold text-5xl">
              
                  Whistle blowing System
                  </h1> */}
                  <p className="mt-4 text-lg text-blueGray-200">
                    {/* Aplikasi Layanan Promosi, dan Informasi DBHCHT */}
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
        </div>

        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-50 -mt-20">
              <div className="w-full lg:w-full px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <div className="flex-auto p-5 lg:p-1">
                    <center>
                      <img
                        className="w-auto h-10 mr-3"
                        src={process.env.PUBLIC_URL + "/banjar.png"}
                        alt="Workflow"
                      />
                      PEMERINTAHAN KOTA BANJAR <br></br>INSPEKTORAT DAERAH
                      {/* <h1 className="text-left">Tiket</h1>
                      <h2 className="text-left" >Pemerintahan Kota Banjar </h2> */}
                      <div class="mt-4"></div>
                    </center>

                    <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-300 ">
                      <div slot="avatar">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-check-circle w-5 h-5 mx-2"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div class="text-xl font-normal  max-w-full flex-initial">
                      Layanan {dataInformasi.layanan}
                      </div>
                      <div class="flex flex-auto flex-row-reverse">
                        {/* <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div> */}
                      </div>
                    </div>

                    <p className="text-1xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      <p>Tiket : {dataInformasi.tiket}</p>
                    </p>
                    <p className="text-1xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      Status : {dataInformasi.status}
                    </p>

                    <p className="text-1xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      Masalah : {dataInformasi.uraian_masalah}
                      &nbsp;
                  
                    </p>
                    <a
                        href={dataInformasi.file_uraian_masalah}
                        className="text-1xl font-semibold leading-normal mb-2 text-blue-800 mb-2"
                      >
                        File Uraian Masalah
                      </a>

                    <p className="text-1xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Rekomendasi : {dataInformasi.rekomendasi}
                      &nbsp;
                   
                    </p>
                    <a
                        href={dataInformasi.file_rekomendasi}
                        className="text-1xl font-semibold leading-normal mb-2 text-blue-800 mb-2"
                      >
                        File Rekomendasi
                      </a>
                   

                    <main className="flex mt-1 px-2 w-full bg-white p-4  items-center flex-col  md:flex-row">
                      <div className="w-full md:w-10/12 mr-auto ml-auto mb-4 ">
                        <div class="mt-4"></div>
                        <div class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-300 ">
                          <div slot="avatar">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle w-5 h-5 mx-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg> */}
                          </div>
                          <div class="text-xl font-normal  max-w-full flex-initial">
                          Terima kasih telah menggunakan Layanan {dataInformasi.layanan} Online
                          </div>
                          <div class="flex flex-auto flex-row-reverse">
                            <div>
                              {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg> */}
                            </div>
                          </div>
                        </div>

                        {/* <p className="text-left leading-relaxed mt-1 mb-4 text-blueGray-800">No Peserta <nbsp>:</nbsp> </p>
            <p className="text-left leading-relaxed mt-1 mb-4 text-blueGray-800">Nama<nbsp>:</nbsp> </p> */}

                        {/* <img
                        alt="..."
                        src={require("assets/img/s.png").default}
                        className="w-full align-middle rounded-t-lg"
                      /> */}
                
                      </div>
                    </main>
             
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h1 className="mb-4 text-lg  text-blueGray-700"></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
