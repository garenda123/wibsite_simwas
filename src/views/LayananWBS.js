import React from "react";
//import { Link } from "react-router-dom";
// import Axios from 'axios';

// components
import Navbar from "components/Navbars/Nav.js";
// import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Router } from "react-router";
// import { data } from "autoprefixer";
import {ROOT_URL, API_URL} from 'config/config'

export default function PelayananPublic() {
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
                      <h1 className="text-left">Whistle Blowing System</h1>
                      <h2 className="text-left" >Pemerintahan Kota Banjar </h2>
                      
                      <p className="text-left leading-relaxed mt-1 mb-4 text-blueGray-800">
                      Anda mengetahui tindakan melanggar peraturan yang telah atau akan dilakukan oleh seseorang yang anda kenal sebagai pegawai Pemerintah Kota Banjar?
                      </p>
                      <h3 className="text-left">Silahkan melapor ke Inspektorat Kota Banjar.</h3>
                      <p className="text-left leading-relaxed mt-1 mb-4 text-blueGray-800">Jika pengaduan anda memenuhi syarat/kriteria yang dapat ditangani Inspektorat Kota Banjar, maka akan diproses lebih lanjut oleh petugas.</p>
                    </center>
                    <div className="text-left mt-6">
                      <a
                        href="./LayananWBSform"
                        className="bg-orange-500 text-white active:bg-blueGray-100 text-1xl  uppercase px-3 py-2 rounded-full"
                        type="button"
                      >
                       Form Pengaduan
                      </a>
                    </div>
                    <div>
                   
                    <main className="flex mt-10 px-10 w-full bg-blueGray-200 p-4  items-center flex-col  md:flex-row" >
            <div className="w-full md:w-10/12 mr-auto ml-auto mb-4 ">
              
            <div class="fa fa-edit text-2xl text-gray-600 "> Kriteria Pengaduan </div>
            
            
              
            <img
                        alt="..."
                        src={require("assets/img/s.png").default}
                        className="w-full align-middle rounded-t-lg"
                      />
                <div>
                <p>Menjelaskan siapa, melakukan apa, kapan, di mana, mengapa dan bagaimana.</p>
                <p>1. Dilengkapi dengan bukti permulaan (data, dokumen, gambar dan rekaman) yang mendukung/menjelaskan adanya tindak penyimpangan.</p>
                <p>2. Diharapkan dilengkapi dengan data sumber informasi untuk pendalaman.</p>
                <p>3. Untuk anda yang ingin melaporkan indikasi tindak penyimpangan, tapi merasa sungkan atau takut identitasnya terungkap, karena kebetulan anda kenal dengan pelakunya, misalnya atasan, teman sekerja, dan lain-lain, anda bisa menggunakan fasilitas ini. Anda bisa melaporkan indikasi tindak penyimpangan yang dilakukan oleh atasan anda kepada bagian Pengawasan Internal di tempat anda bekerja, tapi apakah ada jaminan bahwa identitas anda akan terjaga kerahasiaannya? Dengan menjadi whistleblower bagi Inspektorat Kota Banjar, kerahasiaan identitas anda akan dijamin oleh Inspektorat Kota Banjar. Anda bisa menjadi whistleblower bagi Inspektorat Kota Banjar di mana saja.</p>
                </div>
                

               
            </div>

            <div className="flex-2 ml-2 p-8 ">
            <div class="fas fa-book text-2xl text-gray-600"> Kerahasiaan </div>
            <p></p>
                <p>Sistem ini secara teknis menjaga anonimitas Anda. Agar lebih menjamin Kerahasiaan, perhatikan hal-hal yang berikut ini:</p>
                <p>. Tidak mengisi data pribadi atau informasi yang memungkinkan bagi orang lain untuk melakukan pelacakan siapa Anda, seperti nama Anda atau hubungan Anda dengan pelaku-pelaku.</p>
                <p>. Hindari penggunaan Komputer kantor Anda jika Pengaduan yang akan Anda berikan melibatkan pihak-pihak di dalam kantor Anda.</p>
                <p>Inspektorat Kota Banjar akan merahasiakan informasi pribadi Anda sebagai whistleblower, Inspektorat Kota Banjar hanya fokus pada kasus yang dilaporkan.</p>
                
                <div class="fas fa-envelope-square text-2xl text-gray-600"> Media Komunikasi </div>
            <p></p>
                <p>Saluran komunikasi antara Pelapor dengan Inspektorat Kota Banjar.</p>
                <p>.Buat Username dan Password yang anda ketahui sendiri.</p>
                <p>.Gunakan nama yang unik dan tidak menggambarkan identitas anda.</p>
                <p>.Ingat dengan baik Username dan Password</p>
                <p>Jika laporan anda memenuhi kriteria yang ditetapkan, petugas Inspektorat Kota Banjar akan menghubungi anda melalui Media Komunikasi ini, untuk proses lanjut penanganan pengaduan</p>
                {/* <p className="text-base">
                    Inisiatif Satu Data diawali dengan Portal Data Indonesia, yaitu data.go.id, yang diinisiasi oleh Unit Kerja Presiden Bidang Pengawasan Pengendalian Pembangunan (UKP-PPP) sebagai salah satu komitmen pemerintah dalam Open Government Partnership. <br/>
                    Seluruh kumpulan data yang ada di dalam data.go.id dikategorikan sebagai domain publik sehingga tidak diperkenankan mengandung informasi yang mengandung rahasia negara, rahasia pribadi atau hal-hal lainnya yang diatur dalam Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
                </p>
                <h1 className="font-semibold text-lg mt-5">
                    Statistik
                </h1>
                <p className="text-base">
                    UU Republik Indonesia Nomor 16 Tahun 1997 tentang Statistik menegaskan Statistik adalah data yang diperoleh dengan cara pengumpulan, pengolahan, penyajian, dan analisis serta sebagai sistem yang mengatur keterkaitan antar unsur dalam penyelenggaraan statistik.<br/>
                    Statistik yang pemanfaatannya ditujukan untuk memenuhi kebutuhan instansi tertentu, dalam rangka penyelenggaraan tugas-tugas pemerintahan dan pembangunan yang merupakan tugas pokok instansi yang bersangkutan.
                </p> */}
                <div class="fa fa-forward text-2xl text-gray-600"> Whistleblower </div>
                 <p></p>
                <p>Seseorang yang melaporkan perbuatan yang berindikasi tindak penyimpangan yang terjadi di dalam organisasi tempat dia bekerja, dan dia memiliki akses informasi yang memadai atas terjadinya indikasi tindak penyimpangan tersebut</p>
            </div>
            
           
        </main>
    
       
  
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
