
import React, { useEffect,useState } from 'react';
import Axios from 'axios';
import {API_URL} from '../config/config'
import Navbar from './Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

// const callouts = [
//     {
//       name: 'Desk and Office',
//       description: 'Work from home accessories',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
//       imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
//       href: '#',
//     },
//     {
//       name: 'Self-Improvement',
//       description: 'Journals and note-taking',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
//       imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
//       href: '#',
//     },
//     {
//       name: 'Travel',
//       description: 'Daily commute essentials',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
//       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//       href: '#',
//     },
//   ]
  
  export default function Example() {
    let { params } = useParams();
    const [keywords, setKeywords] = useState((params) ? params : '');
    const [dataInformasi,setDataInformasi] = useState([]);
    const [startPage,setStartPage] = useState(1);
    const [totalRecordCount,setTotalRecordCount] = useState(0);

    
    useEffect(() => {
      checkInfo();
      // checkPromo();
    } );
  


    const checkInfo = () => {
      try {
        Axios.get(`${API_URL}/list/t_berita?cmd=search&t=t_berita&x_kategori_berita_id=${keywords}`)
          .then(res => {
          console.log(res.data);
            const data = res.data;
           setTotalRecordCount(data.totalRecordCount);
            setDataInformasi(data.t_berita);
            console.log(data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      } catch (error) {
        console.log(error);
      }
    }


    return (
     
      <div className="bg-gray-100">
         <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-900">Berita</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">

              {/* {callouts.map((callout) => ( */}
              {/* {dataInformasi.map( hasil => { */}

                {dataInformasi.map((hasil) => (

                <div key={hasil.judul} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={hasil.gambar}
                      // alt={dataInformasi.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={hasil.href}>
                      <span className="absolute inset-0" />
                      {hasil.tanggal}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{hasil.isi}</p>
                </div>

              ))}


            </div>
          </div>
        </div>

      </div>
    )
  }
  