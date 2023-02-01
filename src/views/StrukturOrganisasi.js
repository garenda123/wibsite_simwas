import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Axios from "axios";
import { API_URL } from "../config/config";
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { data } from "autoprefixer";

export default function StrukturOrganisasi() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
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
                  <h1 className="text-white font-semibold text-5xl"></h1>
                  <h2 className="mt-4 text-white font-semibold text-4xl">
                    Struktur Organisasi
                  </h2>
                  <p className="mt-4 text-lg text-blueGray-200"></p>
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
            <div className="container mx-auto px-4">
              {/*  <div className="flex flex-wrap items-center mt-32"> */}

              <a
                href="../TugasFungsi"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/tiny-hr-manager-looking-candidate-job-interview-magnifier-computer-screen-flat-vector-illustration-career-employment_74855-8619.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
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
                        Tugas dan Fungsi
                      </h4>{" "}
                    </center>
                    {/* <p className="text-md font-light mt-2 text-white">
                       isi
                      </p> */}
                  </blockquote>
                </div>
              </a>

              <a
                href="../pemeriksaan"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/flat-organizational-chart-infographic_23-2149024445.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
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
                        Struktur Organisasi
                      </h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>

              <a
                href="../layanan_konsultasi"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/political-debate-concept-illustration_114360-4138.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
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
                        Profil Pejabat Struktural
                      </h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>

              <a
                href="../perencanaan"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/happy-business-colleagues-team-portrait_179970-1271.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
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
                      <h4 className="text-xl font-bold text-white">Pegawai</h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>

              <a
                href="../pelaksanaan"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/business-plan-concept-illustration_114360-1487.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
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
                        Strategi dan Kebijakan
                      </h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>

              <a
                href="../pelaporan"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/businessmen-working-woman-big-target-with-arrow-goals-objectives-business-grow-plan-goal-setting-concept-white-background_335657-2048.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
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
                        Tujuan dan Sasaran
                      </h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>

              <a
                href="../tindak_lanjut"
                className="w-full md:w-4/12 px-2 mr-auto ml-auto"
                type="button"
              >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={
                      "https://img.freepik.com/free-vector/universal-declaration-human-rights-concept-illustration_114360-7568.jpg?size=626&ext=jpg"
                    }
                    className="w-full align-middle rounded-t-lg"
                  />
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
                        Produk Hukum
                      </h4>{" "}
                    </center>
                  </blockquote>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
