import React, {useState, useEffect} from "react";
import Axios from 'axios'
import {API_URL} from '../../config/config';

// components

export default function TabelSemester() {
  const [listRealisasi, setListRealisasi] = useState([])

  useEffect(() => {
    (async () => {
      const resRealisasi = await Axios.get(`${API_URL}/api/list/m_objek_periode`).then(res => res.data.m_objek_periode);
      setListRealisasi(resRealisasi)
    })()
  }, []);

  const [listBidang, setListBidang] = useState([])

  useEffect(() => {
    (async () => {
      const resBidang = await Axios.get(`${API_URL}/api/list/m_objek_bidang`).then(res => res.data.m_objek_bidang);
      setListBidang(resBidang)
    })()
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Riwayat Realisasi
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Periode
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
            {listRealisasi.map((hasil, key) => 
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {hasil.periode}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {
                        (window.location.href.includes("realisasi-per-opd")) ?
                          <a href={`/dashboard/realisasi-per-opd/${hasil.periode_id}`} className="bg-indigo-500 text-white p-2 rounded">Lihat opd</a>
                        :
                        <a href={`/dashboard/realisasi-per-bidang/${hasil.periode_id}`} className="bg-indigo-500 text-white p-2 rounded">Lihat bidang</a>
                      }
                        
                    </td>
                </tr>
                )}

             {/*  {listBidang.map((hasil, key) => 
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {hasil.bidang}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                         <a href={`/dashboard/m_objek_bidang/${hasil.objek_bidang_id}`} className="bg-indigo-500 text-white p-2 rounded">Lihat bidang</a>
                      
                    </td>
                </tr>
                )} */}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
