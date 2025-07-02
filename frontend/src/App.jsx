import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import LandingPage from "./pages/LandingPage/LandingPage";
import About from "./pages/About/About";
import Login from "./auth/Login";
import Register from "./auth/Register";

import ResidentDashboard from "./pages/ResidentDashboard/ResidentDashboard";
import Profile from "./pages/Profile/Profile";
import Payments from "./pages/Payments/Payments";
import Ledger from "./pages/Payments/Ledger";
import Maintenance from "./pages/Maintenance/Maintenance";
import Announcements from "./pages/Announcements/Announcements";

import ManagerDashboard from "./pages/ManagerDashboard/ManagerDashboard";
import ManagePropertyInfo from "./pages/ManagePropertyInfo/ManagePropertyInfo";
import AddPropertyForm from "./pages/ManagePropertyInfo/AddPropertyForm";
import EditPropertyForm from "./pages/ManagePropertyInfo/EditPropertyForm";
import ManageUnits from "./pages/ManageUnits/ManageUnits";
import AddUnitForm from "./pages/ManageUnits/AddUnitForm";
import EditUnitForm from "./pages/ManageUnits/EditUnitForm";

import ManageResidents from "./pages/ManageResidents/ManageResidents";
import ViewResident from "./pages/ManageResidents/ViewResident";
import AddResidentForm from "./pages/ManageResidents/AddResidentForm";
import EditResidentForm from "./pages/ManageResidents/EditResidentForm";

import ManageUsers from "./pages/ManageUsers/ManageUsers";
import ManagePayments from "./pages/ManagePayments/ManagePayments";
import ManageUtilities from "./pages/ManageUtilities/ManageUtilities";
import ManageRates from "./pages/ManageUtilities/ManageRates";
import ManageMaintenance from "./pages/ManageMaintenance/ManageMaintenance";
import ManageAnnouncements from "./pages/ManageAnnouncements/ManageAnnouncements";
import ManageTenantLedger from "./pages/ManagePayments/ManageTenantLedger";

import Contact from "./pages/Contact/Contact";
import Error404 from "./Error404";
import LandingPageLayout from "./layout/LandingPageLayout";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<LandingPageLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<Layout />}>

        {/* Resident Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/resident/dashboard" element={<ResidentDashboard />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectedRoute requireManager={true} />}>
          <Route path="/admin/dashboard" element={<ManagerDashboard />} />
          <Route path="/admin/propertyinfo" element={<ManagePropertyInfo />} />
          <Route path="/admin/addproperty" element={<AddPropertyForm />} />
          <Route
            path="/admin/editproperty/:id"
            element={<EditPropertyForm />}
          />
          <Route path="/admin/units" element={<ManageUnits />} />
          <Route path="/admin/addunit" element={<AddUnitForm />} />
          <Route path="/admin/editunit/:id" element={<EditUnitForm />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/admin/payments" element={<ManagePayments />} />
          <Route path="/admin/utilities" element={<ManageUtilities />} />
          <Route path="/admin/maintenance" element={<ManageMaintenance />} />
          <Route
            path="/admin/announcements"
            element={<ManageAnnouncements />}
          />
          <Route path="/admin/rates" element={<ManageRates />} />
          <Route path="/ledger/:userId" element={<ManageTenantLedger />} />
        </Route>

        <Route path="*" element={<Error404 />} />

      </Route>
    </Routes>
  );
}
