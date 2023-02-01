import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Axios from "axios";
import FlipPage from "react-flip-page";

import cover from "assets/img/i.jpg";
import cover2 from "assets/img/e.jpg";
import cover3 from "assets/img/f.png";
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
import {ROOT_URL, API_URL} from 'config/config'

export default function TiketList() {

    let { tiket } = useParams();

    const [dataInformasi, setDataInformasi] = useState([]);
  
    useEffect(() => {
      checkInfo();
    }, []);
  
    const checkInfo = () => {
      console.log(tiket);
      try {
        Axios.get(`${API_URL}/list/v_tiket/${tiket}`)
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

    const pages = [

      { title: "Ketua" , content: "Ketua atau pemimpin adalah posisi tertinggi dalam kelompok yang terorganisir seperti direksi, komite, atau badan musyawarah. Orang yang memegang posisi biasanya dipilih atau ditunjuk oleh para anggota kelompok.",  gambar: <img width="50%" src={cover} /> },
      { title: "Wakil Ketua", content: "Wakil Ketua a. Adakalnya orang mengatakan: 'Dia adalah wakil ketua, karena ketua berhalangan hadir. .Pengertian 'wakil ketua' adalah 'wakil dari ketua' atau 'mewakili ketua' dalam kehadiran suatu acara. Dengan makna ini, maka 'wakil ketua' tidak harus mempunyai jabatan di bawah 'ketua' dalam suatu organisasi, sebagaimana dapat dilihat dalam kehidupan sehari hari." ,  gambar: <img width="50%" src={cover2} /> },
      { title: "Sekretaris", content: "Sekretaris adalah sebuah profesi administratif yang bersifat asisten/mendukung. Gelar ini merujuk kepada sebuah pekerja kantor yang tugasnya ialah melaksanakan perkerjaan rutin, tugas-tugas administratif, atau tugas-tugas pribadi/langsung dari atasannya." ,  gambar: <img width="50%" src={cover3} />}
    ];
    console.log(dataInformasi)
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
                 
                <div className="app">
      <FlipPage
        className="book"
        showSwipeHint
        uncutPages={true}
        orientation="horizontal"
        width={1000}
      
        height={1000}
        pageBackground="#fffdf8"
        animationDuration="400"
      >
        {dataInformasi.map(hasil => (
          <article style={{ width: "900px ",height: "100% ", padding: "10px 20px" }}>
            {/* <h1>{page.title}</h1>
            <p>{page.content}</p>
            <p>{page.gambar}</p> */}
            
                            <p> {hasil.tiket} </p>
                            <p> {hasil.status} </p>
                       
          </article>
        ))}
      </FlipPage>




    </div>
                </div>
              </div>
            </div>
          </div>
        </section>



<section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-50 -mt-20">
              <div className="w-full lg:w-full px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <div className="flex-auto p-5 lg:p-1">
              
              {dataInformasi.map((hasil) => {
                return (

                  
                  <a
                    href={`/tiket/${hasil.tiket}`}
                    className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                    type="button"
                  >
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                      
                      <br></br>
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block h-95-px -top-94-px"
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="text-lightBlue-500 fill-current"
                          ></polygon>
                        </svg>

                        <center>
                          <h4 className="text-xl font-bold text-white">
                            <p> {hasil.tiket} </p>
                            <p> {hasil.status} </p>
                          </h4>{" "}
                        </center>
                      </blockquote>
                    </div>
                  </a>
                );
              })}

           {/*    {
                  (totalRecordCount - startPage < 6) ? <button onClick={() => handlePagination('prev')} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button">Prev</button> : ""
                } */}
            {/*   {
                  (startPage == 1) ? <button onClick={() => handlePagination('next')} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 flex-auto rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button" >Next</button> : ""
                } */}

            </div>
          </div>
          </div></div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
