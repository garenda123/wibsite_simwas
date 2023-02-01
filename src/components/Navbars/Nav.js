import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { ChevronDownIcon } from "@heroicons/react/outline";
// import {Dropdown} from 'react-multilevel-dropdown';

import { AuthContext } from "../context/AuthContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  let userId = localStorage.getItem("userId");
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const navigation = [];
  return (
    <Fragment>
      <Disclosure
        as="nav"
        className="bg-black shadow-md fixed w-full z-50 top-0"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl  mx-auto px-2 sm:px-6 lg:px-8 py-1">
              <div className="relative  flex items-center justify-between h-16">
                <>
                  <nav className="top-0 absolute z-50  w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
                    <div className=" bg-blueGray-600 container  px-4 w-full mx-auto flex flex-wrap items-center justify-between">
                      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                          className="text-white text-sm font-bold  leading-relaxed mr-4 py-2 whitespace-nowrap uppercase flex items-center"
                          to="/"
                        >
                          <img
                            className="w-auto h-12 mr-3"
                            src={process.env.PUBLIC_URL + "/logo.png"}
                            alt="Workflow"
                          /> 
                          Pemerintah kabupaten banyumas
                        
                        
                        </Link>
                        <button
                          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                          type="button"
                          onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                          <i className="text-black fas fa-bars"></i>
                        </button>
                        {/* <p className="flex items-center text-white">PEMERINTAH KOTA BANJAR </p> */}
                      </div>
                      
                      {/* <p className="flex items-center text-white">INSPEKTORAT </p>
          <p className="flex items-center text-white">#Tanginas</p> */}
                      {/* <img className=" items-center w-auto h-12 mr-20" src={process.env.PUBLIC_URL + '/tulisan.png'} alt="Workflow" /> */}
                      <div
                        className={
                          "lg:flex flex-grow items-center bg-blueGray-600 lg:bg-opacity-0 lg:shadow-none" +
                          (navbarOpen ? " block rounded shadow-lg" : " hidden")
                        }
                        id="example-navbar-warning"
                      >
                        <ul className="flex flex-col lg:flex-row rounded-lg bg-blueGray-600 list-none lg:ml-auto">
                          <li className="flex items-center">
                            <a
                              className="lg:text-black text-left lg:hover:text-black text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                              href="/Beranda"
                            >
                              <i className="lg:text-black text-black  text-lg leading-lg mr-2" />{" "}
                              Beranda
                            </a>
                          </li>

                          {/* <li className="flex items-center">
                            <a
                              className="lg:text-black text-center lg:hover:text-black text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                              href="/Profil"
                            >
                              <i className="lg:text-black text-black   text-lg leading-lg mr-2" />{" "}
                              Profil
                            </a>
                          </li> */}

                          {/*           <li className="flex items-center">
              <a
                  className="lg:text-black text-center lg:hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/PembinaanPengawasan"
                >
                  <i className="lg:text-black text-black  text-lg leading-lg mr-2" />{" "}
                  Pembinaan Pengawasan
                </a>
              </li>

              <li className="flex items-center">
              <a
                  className="lg:text-black text-center lg:hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/Reformasi"
                >
                  <i className="lg:text-black text-black far text-lg leading-lg mr-2" />{" "}
                  Reformasi Birokrasi & Pencegahan Tipikor
                </a>
              </li> */}

                          <li className="flex items-center">
                            <a
                              className="lg:text-black text-center lg:hover:text-black text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                              href="/Program"
                            >
                              <i className="lg:text-black text-black  text-lg leading-lg mr-2" />{" "}
                              PROGRAM
                            </a>
                          </li>
                        </ul>

                        {/*    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
 
            </ul> */}

                        {/* <li className="flex items-center">
                          <a
                            className="lg:text-black text-center lg:hover:text-black text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="/PelayananPublik"
                          >
                            <i className="lg:text-black text-black  text-lg leading-lg mr-2" />{" "}
                            Layanan
                          </a>
                        </li> */}

                        {/* <li className="flex items-center">
                          <a
                            className="lg:text-black text-center lg:hover:text-black text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="/Beranda/#about"
                          >
                            <i className="lg:text-black text-black  text-lg leading-lg mr-2" />{" "}
                            About
                          </a>
                        </li> */}

                        <li className="flex items-center">
                          <a
                            className="lg:text-black text-center lg:hover:text-white text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                            href="https://inf.co.id/simdes/login"
                          >
                            <i className="lg:text-black text-black  text-lg leading-lg mr-2" />{" "}
                            Simdes
                          </a>
                        </li>

                    
                      </div>
                    </div>
                  </nav>
                </>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-gray-900 bg-cyan-900"
                        : "text-gray-700 hover:bg-gray-900 hover:text-black",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* NAVIGATION END */}
    </Fragment>
  );
}
