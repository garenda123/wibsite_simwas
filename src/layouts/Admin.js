import React, {useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views


import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import RealisasiPerOpd from "views/grafik/RealisasiPerOpd";
import RealisasiPerBidang from "views/grafik/RealisasiPerBidang";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar/>
        {/* Header */}
        <HeaderStats id={window.location.href.split('/')[window.location.href.split('/').length - 1]} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/dashboard/realisasi-per-opd/:id" exact component={RealisasiPerOpd} />
            <Route path="/dashboard/realisasi-per-bidang/:id" exact component={RealisasiPerBidang} />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
