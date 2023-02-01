import React, { useState, useEffect } from "react";
// import Navbar from "components/Navbars/AuthNavbar.js";
import Navbar from "components/Navbars/Nav.js";
import Footer from "components/Footers/Footer.js";
import Axios from "axios";
import { API_URL } from "../config/config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function InformasiDetail() {
  let { id } = useParams();

  const [dataInformasi, setDataInformasi] = useState([]);
  const [dataParagraf, setDataParagraf] = useState([]);

  useEffect(() => {
    checkInfo();
  }, []);

  const checkInfo = () => {
    console.log(id);
    try {
      Axios.get(`${API_URL}/view/cv_informasi/${id}`)
        .then((res) => {
          const data = res.data;
          setDataInformasi(data.cv_informasi);
          setDataParagraf(data.cv_informasi.isi.split(String.fromCharCode(13)))
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

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
  
      <Navbar transparent />
      <main className="informasi-page">
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
                  <h1 className="text-white font-semibold text-5xl">
              
                 {/*  Whistleblowing System */}
                  </h1>
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

   

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-50 -mt-20">
              <div className="w-full lg:w-full px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <div className="flex-auto p-5 lg:p-1">

                 
                    
                  
                  

                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      {dataInformasi.judul}
                    </h3>
                    <br></br>
                  </div>
                  
                </div>

         
                <div className="mt-10 py-10 border-t border-blueGray-200 justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      {dataParagraf.map((item, key) => 
                      <div className="flex flex-wrap justify">
            <h1 className="mb-4 text-lg  text-blueGray-700">
                {item}
                
            </h1>
            </div>
            
            )}
                   <div className="">
                      <img
                        alt="..."
                        src={dataInformasi.gambar}
                        className="  rounded-t-lg"
                      />
                      <div></div>
                    </div>


                     {/*  <div>
        <Link
      className="text-black text-center flex flex-wrap justify-center"
      to="/profil"
    >
      <img
                        alt="..."
                        src={require("assets/img/back.png").default}
                        className="w-10 h-10 align-middle rounded-t-lg"
                      />
   <h2 className="text-center">Kembali</h2>
    </Link>
        </div> */}
                    </div>
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
