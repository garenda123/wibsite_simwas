import React, { useEffect, useState ,useRef} from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import "../App.css";
import emailjs from "emailjs-com";

import apiKeys from "../config/apikeys";
import Navbar from "components/Navbars/Nav.js";
// import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import "semantic-ui-css/semantic.min.css";
import { API_URL } from "../config/config";

import { useHistory } from "react-router";


import FlipPage from "react-flip-page";

import cover from "assets/img/i.jpg";
import cover2 from "assets/img/e.jpg";
import cover3 from "assets/img/f.png";


export default function KirimEmail() {
  let history = useHistory();
  const [nip_pelapor, setNip_pelapor] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nama_jabatan_dilaporkan, setNama_jabatan_dilaporkan] = useState("");
  const [unit_kerja_terlapor, setUnit_kerja_terlapor] = useState("");
  const [waktu, setWaktu] = useState("");
  const [kategori, setKatagori] = useState("");
  const [rincian, setRincian] = useState("");
  const [file_pendukung, setFile_pendukung] = useState("");
  const form = useRef();

  const [showAlert, setShowAlert] = React.useState(true);

  useEffect(() => {
    setShowAlert(false);
  }, [0]);

  const sendDataToAPI = () => {
    axios
      .post(
        `${API_URL}/add/cv_wbs`,
        {
          nip_pelapor,
          nama,
          email,
          nama_jabatan_dilaporkan,
          unit_kerja_terlapor,
          waktu,
          kategori,
          rincian,
          file_pendukung,
         
        }
      )
      .then(() => {
        history.push("/LayananWbsform");
        setShowAlert(true);
      });
  };


  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_r6937se', e.target, 'AzSRlohQYP291ZugP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
  };
  
  const pages = [

    { title: "Ketua" , content: "Ketua atau pemimpin adalah posisi tertinggi dalam kelompok yang terorganisir seperti direksi, komite, atau badan musyawarah. Orang yang memegang posisi biasanya dipilih atau ditunjuk oleh para anggota kelompok.",  gambar: <img width="50%" src={cover} /> },
    { title: "Wakil Ketua", content: "Wakil Ketua a. Adakalnya orang mengatakan: 'Dia adalah wakil ketua, karena ketua berhalangan hadir. .Pengertian 'wakil ketua' adalah 'wakil dari ketua' atau 'mewakili ketua' dalam kehadiran suatu acara. Dengan makna ini, maka 'wakil ketua' tidak harus mempunyai jabatan di bawah 'ketua' dalam suatu organisasi, sebagaimana dapat dilihat dalam kehidupan sehari hari." ,  gambar: <img width="50%" src={cover2} /> },
    { title: "Sekretaris", content: "Sekretaris adalah sebuah profesi administratif yang bersifat asisten/mendukung. Gelar ini merujuk kepada sebuah pekerja kantor yang tugasnya ialah melaksanakan perkerjaan rutin, tugas-tugas administratif, atau tugas-tugas pribadi/langsung dari atasannya." ,  gambar: <img width="50%" src={cover3} />}
  ];

  
  return (
    <>
         <br></br>
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
                  <h1 className="text-white font-semibold text-5xl">
                  
                  Kirim Email Ke Pemohon
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
                className="text-white fill-current"
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
                    
                  {showAlert ? (
                      <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-lightBlue-500">
                        <span className="text-xl inline-block mr-5 align-middle">
                          <i className="fas fa-bell" />
                        </span>
                        <span className="inline-block align-middle mr-8">
                          <b className="capitalize">Berhasil!</b>
                        </span>
                        <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                          <a href="PelayananPublik">Kembali</a>
                        </button>
                      </div>
                    ) : (
                      <div>


                    {/* <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        NIP Pelapor
                      </label>
                      <input
                        type="number"
                        className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="NIP Pelapor"
                        name="nip_pelapor"
                        onChange={(e) => setNip_pelapor(e.target.value)}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Nama Pelapor
                      </label>
                      <input
                        type="nama"
                        className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Nama Pelapor"
                        name="nama"
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </div> */}
<form ref={form} onSubmit={sendEmail}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Kirim ke Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email Pelapor"
                        name="email"
                       // onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="tiket"
                      >
                        kirim Link Tiket 
                      </label>
                      <input
                        type="tiket"
                        className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="kirim Link Tiket "
                        name="tiket"
                        //onChange={(e) => setNama_jabatan_dilaporkan(e.target.value)}
                      />
                    </div>

                    
                 

                    {/* <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        File Pendukung
                      </label>
                      <input
                        type="file"
                        className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="File"
                        name="file_pendukung"
                        onChange={(e) => setFile(e.target.value)}
                      />
                    </div> */}
                    <input className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit" value="Kirim Pesan" onClick={sendDataToAPI}/>
</form>
                    <div className="text-center mt-6">
                      {/* <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={sendDataToAPI}
                      
                      >
                        Kirim Pesan
                      </button> */}

                     
                    </div>
                    </div>
                    )}
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
        {pages.map(page => (
          <article style={{ width: "900px ",height: "100% ", padding: "10px 20px" }}>
            <h1>{page.title}</h1>
            <p>{page.content}</p>
            <p>{page.gambar}</p>
          </article>
        ))}
      </FlipPage>




    </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      
    
      </main>
      <Footer transparent />
    </>
  );
}
