import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { ChevronDownIcon } from '@heroicons/react/outline';
// import {Dropdown} from 'react-multilevel-dropdown';

import {AuthContext} from '../context/AuthContext';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Nav(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  let userId = localStorage.getItem('userId');
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


  const navigation = [
    
  ]
  return (

    
    <Fragment>
      <Disclosure as="nav" className="bg-white shadow-md fixed w-full z-50 top-0">
        {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-1">
            <div className="relative flex items-center justify-between h-16">
              
              
              <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-black text-sm font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase flex items-center"
              to="/"
            >
              <img className="w-auto h-10 mr-3" src={process.env.PUBLIC_URL + '/banjar.png'} alt="Workflow" />
              PEMERINTAHAN KOTA BANJAR <br></br>INSPEKTORAT DAERAH
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-black fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
  
            <ul className="flex flex-col lg:flex-row rounded-lg bg-white list-none lg:ml-auto">
              
              <li className="flex items-center">
              <a
                  className="lg:text-black text-left lg:hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/Beranda"
                >
                  <i className="lg:text-black text-black  text-lg leading-lg mr-2" />{" "}
                  Beranda
                </a>
              </li>

         {/*      <li className="flex items-center">
              <a
                  className="lg:text-black text-center lg:hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/Profil"
                >
                  <i className="lg:text-black text-black   text-lg leading-lg mr-2" />{" "}
                  Profil
                </a>
              </li> */}

             {/*  <li className="flex items-center">
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
              </li>

              <li className="flex items-center">
              <a
                  className="lg:text-black text-center lg:hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/PenegakanIntegritas"
                >
                  <i className="lg:text-black text-black  text-lg leading-lg mr-2" />{" "}
                  Penegakan Integritas
                </a>
              </li> */}
     



              

            

            </ul>

         {/*    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
 
            </ul> */}
     
        
        
        
        

        


     
      {/* <li className="flex items-center">
              <a
                  className="lg:text-black text-center lg:hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/PelayananPublik"
                >
                  <i className="lg:text-black text-black  text-lg leading-lg mr-2" />{" "}
                  Layanan
                </a>
              </li> */}


              
             {/*  <li className="flex items-center">
              <a
                  className="lg:text-black text-center lg:hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/Simwas"
                >
                  <i className="lg:text-black text-black  text-lg leading-lg mr-2" />{" "}
                  Login
                </a>
                
                
              </li> */}

              <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" font-bold inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
         PROFIL
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">

          <Link to="/ProdukHukum" >
          <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
         
          Dasar Hukum
        
        </span>
            
          </summary>
          
        </details>
        </Link>

        <Link to="/InformasiDetail/2" >
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
           
          Struktur Organisasi
       
         
        </span>
            
          </summary>
          
        </details>
        </Link>

        <Link to="/Pegawai" >
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
          
          Data Pegawai
        
          
        </span>
            
          </summary>
          
        </details>
        </Link>

        <Link to="#" >
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
               
         RPJMD
        
           
        </span>
            
          </summary>
          
        </details>
        </Link>

        <Link to ="#" >
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
                  
        Rencana Strategis
       
             
        </span>
            
          </summary>
          
        </details>
        </Link>


        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
      
             Rencana Kinerja
        </span>
            
          </summary>
          <div className="text-sm mt-2 text-gray-800">

          <a className="  text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"  
         href="#" >
          Sub Menu <br></br>Tiap Tahun
        </a>
 

          </div>
        </details>

        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
             Perjanjian Kinerja
        </span>
            
          </summary>
          <div className="text-sm mt-2 text-gray-800">

          <a className="  text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"  
         href="#" >
        Sub Menu <br></br>Tiap Tahun
        </a>
 
        

          </div>
        </details>
        


        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
             Dokumen Pelaksanaan<br></br> Anggaran
        </span>
            
          </summary>
          <div className="text-sm mt-2 text-gray-800">

          <a className="  text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"  
         href="#" >
          Sub Menu <br></br>Tiap Tahun
        </a>
        
        

          </div>
        </details>

           {/*  <Menu.Item>
              {({ active }) => (
                <a
                  href="/ProdukHukum"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Dasar Hukum
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/InformasiDetail/2"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Struktur Organisasi
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/Pegawai"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Data Pegawai
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 RPJMD
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Rencana Strategis
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Rencana Kinerja
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Perjanjian Kinerja
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Dokumen Pelaksanaan Anggaran
                </a>
              )}
            </Menu.Item> */}
           {/*  <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                   Data Pegawai
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="font-bold inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          PROGRAM
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
           
            <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
          Pembinaan Pengawasan
        </span>
            
          </summary>
          <div className="text-sm mt-2 text-gray-800 bg-blueGray-200">

          <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"  
         href="/informasidetail/8" >
          Audit
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="/informasidetail/9" >
         Reviu
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="/informasidetail/10" >
         Monitoring
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="/informasidetail/11" >
         Evaluasi
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="/informasidetail/12" >
         Kegiatan <br></br>Pengawasan Lainnya
        </a>

          </div>
        </details>

        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
          Reformasi Birokrasi
        </span>
            
          </summary>
          <div className="text-sm mt-2 text-gray-800 bg-blueGray-200 ">

          <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"  
         href="#" >
          PMPRB
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="#" >
         SKIP
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="#" >
        PK APIP
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="#" >
        Wistle Blowing System
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="#" >
         Pengendalian Gratifikasi
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="#" >
       Kapabilitas APIP
        </a>

          </div>
        </details>

        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
          Pencegahan TIPIKOR
        </span>
            
          </summary>
          <div className="text-sm mt-2 text-gray-800 bg-blueGray-200 ">

          <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"  
         href="#" >
          Monitoring Centre of<br></br>Prevention (MCP) KPK
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="#" >
         Fraud Control <br></br>Plan (FCP)
        </a>
        

          </div>
        </details>

        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
          Penegakan Integritas
        </span>
            
          </summary>
          <div className="text-sm mt-2 text-gray-800 bg-blueGray-200">

          <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"  
         href="#" >
          LHKPN
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="#" >
         LHKASN
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="#" >
        Benturan Kepentingan
        </a>
        <a className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" 
         href="#" >
        Zona Integritas <br></br>WBK/WBBM
        </a>
        

          </div>
        </details>
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item> */}
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

    <li className="flex items-center">
              <a
                  className="lg:text-black text-center lg:hover:text-black text-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/berita"
                >
                  <i className="lg:text-black text-black  text-lg leading-lg mr-2" />{" "}
                  Berita & Informasi
                </a>
              </li>

              <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" font-bold inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
         LAYANAN
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">

          <Link to ="#" >
          <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
       
          PPID
        
           
        </span>
            
          </summary>
          
        </details>
        </Link>

        <Link to="/LayananPengaduan" >
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
                 
         Pengaduan Masyarakat<br></br>(SPAN LAPOR)
        
           
        </span>
            
          </summary>
          
        </details>
        </Link>

        <Link to ="/LayananKonsultasi" >
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
              
         Klinik Konsultasi
        
           
        </span>
            
          </summary>
          
        </details>
        </Link>

        <Link to="/LayananWBS" >
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
                 
          Whistle Blowing System<br></br>(WBS)
        
           
        </span>
            
          </summary>
          
        </details>
        </Link>

        <Link to="/LayananPermohonan" >
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
                 
           Permohonan Bebas Temuan
       
           
        </span>
            
          </summary>
          
        </details>
        </Link>

           {/*  <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  PPID
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/LayananPengaduan"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Pengaduan Masyarakat(SPAN LAPOR)
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/LayananKonsultasi"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Klinik Konsultasi
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/LayananWBS"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Whistle Blowing System (WBS)
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/LayananPermohonan"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Permohonan Bebas Temuan
                </a>
              )}
            </Menu.Item> */}
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

              <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" font-bold inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          LOGIN
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">

          <Link to ="/slide" >
          <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
                 
         Simwas Backoffice
        
           
        </span>
            
          </summary>
          
        </details>
        </Link>

        <Link to ="/simwas_auditee/login" >
        <details className="text-base rounded-md bg-white p-4 text-gray-900 shadow-md mb-1">
          <summary className="font-medium list-none flex justify-between">
          <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-800"
          }
        >
                 
        Simwas Auditee
        
           
        </span>
            
          </summary>
          
        </details>
        </Link>

          {/* s */}
       
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item> */}
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


   

    

      
          </div>
        </div>
      </nav>
    </>
  




            </div>
          </div>
  
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
              <a key={item.name} href={item.href} className={classNames( item.current ? 'text-gray-900 bg-white'
                : 'text-gray-700 hover:bg-gray-900 hover:text-white' , 'block px-3 py-2 rounded-md text-base font-medium' )}
                aria-current={item.current ? 'page' : undefined}>
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
  )
}