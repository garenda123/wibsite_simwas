import React, { useEffect, useState ,useRef ,useParams} from "react";
import { Form, Button } from "semantic-ui-react";
import Axios from "axios";
import axios from "axios";
import "../App.css";
import emailjs from "emailjs-com";

import apiKeys from "../config/apikeys";
import Navbar from "components/Navbars/Nav.js";
// import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import "semantic-ui-css/semantic.min.css";
import { API_URL } from "../config/config";
import moment from 'moment'
import { useHistory } from "react-router";







export default function LayananWBSform() {

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
  const [lookupLokasiKerja, setLookupLokasiKerja] = useState([]);
  const [dataInformasi, setDataInformasi] = useState([]);
  const [uraian_masalah, setUraian] = useState('');
  const [file_uraian_masalah, setFile] = useState('');
  
  // const timestamp = Date.now();
  const [tiket, setTiket] = useState("");
  const dateTime = new Date()
    

    

  const [showAlert, setShowAlert] = React.useState(true);

  useEffect(() => {
    setShowAlert(false);
  }, [0]);

  useEffect(() => {
    getLookup()

},[])

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
          tiket,
          uraian_masalah,
          file_uraian_masalah,
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

  const getLookup = async () => {
    const lk = await axios.get(`${API_URL}/list/m_objek`).then((res) => {
      setLookupLokasiKerja(res.m_objek);
    })
    setLookupLokasiKerja(lk);
  
}






useEffect(() => {
  checkInfo();
}, []);

const checkInfo = () => {

  setTiket( Date.now());
  setWaktu( new Date()) ;
  try {
    Axios.get(`${API_URL}/list/cv_m_objek`)
      .then((res) => {
        const data = res.data;
        setDataInformasi(data.cv_m_objek);
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
                  
                  Whistleblowing System
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
                        Email Pelapor
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email Pelapor"
                        name="email" 
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="nama"
                      >
                        Nama & Jabatan Pihak yang Dilaporkan
                      </label>
                      <input
                        type="nama"
                        className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Nama & Jabatan Pihak yang Dilaporkan"
                        name="nama"
                        onChange={(e) => setNama_jabatan_dilaporkan(e.target.value)}
                      />
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Unit Kerja Lokasi Terlapor
                      </label>

                      <select
                        id="unit"
                        name="unit"
                        onChange={(e) => setUnit_kerja_terlapor(e.target.value)}
                        className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        {/* <option disabled selected hidden>
                          Unit Kerja
                        </option> */}
                        <option value="" disabled selected>Unit Kerja Lokasi Terlapor</option>
                               
                                {
                                    dataInformasi.map((value, index) => (
                                        <option value={value.objek}>{value.objek}</option>
                                        
                                    ))
                                }
                      </select>
                    </div>

           

                    {/* <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        <p>{moment(dateTime).format('YYYY-MM-D')}</p>
                      </label>
                      <input
                        type="date"
                        className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder={moment(dateTime).format('DD:MM:YY')}
                        name="waktu"
                        value={moment(dateTime).format('DD:MM:YY')}
                        onChange={(e) => setWaktu(e.target.value)}
                      />
                    </div> */}

                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Kategori
                      </label>
                      <select
                        id="golongan"
                        name="kategori"
                        onChange={(e) => setKatagori(e.target.value)}
                        className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option disabled selected hidden>
                          Kategori
                        </option>
                        <option value="Korupsi, kolusi, dan nepotisme">
                          Korupsi, kolusi, dan nepotisme
                        </option>
                        <option value="Penyalahgunaan Wewenang">Penyalahgunaan Wewenang</option>
                        <option value="Kecurangan (Fraud)">Kecurangan (Fraud)</option>
                        <option value="Perbuatan melanggar hukum dan peraturan internal">
                          Perbuatan melanggar hukum dan peraturan internal
                        </option>
                        <option value="Penggelapan aset">Penggelapan aset</option>
                        <option value="Kepegawaian">Kepegawaian</option>
                        <option value="Benturan Kepentingan">Benturan Kepentingan</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                   
                    </div>

                    {/* <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Rincian Aduan
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Rincian Aduan"
                        name="rincian"
                        onChange={(e) => setRincian(e.target.value)}
                      />
                    </div> */}

                

                    <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            Uraian Masalah
                          </label>
                          <textarea
                            rows="4"
                            cols="80"
                            className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Uraian masalah..."
                            name="uraian"
                            onChange={(e) => setUraian(e.target.value)}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block  text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            <label className="block uppercase">File Uraian Masalah</label> 
                            <label>(Google Drive, Anyone with the link)</label> 
                            <a href="https://www.youtube.com/watch?v=uZjLDBEIAOg"  target="blank" className="bg-orange-500 text-white active:bg-blueGray-100 text-1xl  uppercase px-3 py-2 rounded-full">
                           link tutorial</a>
                          </label>
                          <textarea
                            rows="4"
                            cols="80"
                            className="border-0 px-3 py-3 placeholder-black text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="File uraian masalah.."
                            name="file_uraian_masalah"
                            onChange={(e) => setFile(e.target.value)}
                          />
                        </div>
                        <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="tiket"
                        
                      >
                        Tiket
                      </label> 
                      <input
                        type="tiket"
                        className="border-0 px-3 py-3 placeholder-black text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder={tiket}
                        name="tiket" 
                        readOnly={true}
                        value={tiket}
                      />
                    </div>

                 

                    


                     

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
      </main>
      <Footer transparent />
    </>
  );
}
