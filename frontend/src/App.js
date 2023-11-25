import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddKontrakan from "./pages/AddKontrakan";
import EditKontrakan from "./pages/EditKontrakan";
import Kontrakan from "./pages/Kontrakan";
import EditPengaturanAkun from "./pages/EditPengaturanAkun";
import Pengaturan from "./pages/Pengaturan";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UploadGambar from "./components/formtambahfoto";
import PropertyDetail from "./components/kontrakandetails";
import Booking from "./pages/Booking";
import EditBooking from "./pages/EditBooking"
import CustomerSignUpForm from "./pages/Login/customer-signup";
import OwnerSignUpForm from "./pages/Login/owner-signup";
import Pembayaran from "./pages/pembayaran";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login/login" element={<Login />} />
          <Route path="/signup/customer" element={<CustomerSignUpForm/>}/>
          <Route path="/signup/owner" element={<OwnerSignUpForm/>}/>
          <Route path="/uploadgambar/:id" element={<UploadGambar />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/managekontrakan/add" element={<AddKontrakan />} />
          <Route path="/managekontrakan/edit/:id" element={<EditKontrakan />} />
          <Route path="/managekontrakan" element={<Kontrakan />} />
          <Route path="/pengaturanakun" element={<Pengaturan />} />
          <Route path="/managebooking/edit/:id" element={<EditBooking />} />
          <Route
            path="/pengaturanakun/edit/:id"
            element={<EditPengaturanAkun />}
          />
          <Route
            path="/kontrakan/details/:id=:kontrakanId:ownerId"
            element={<PropertyDetail />}
          />
          <Route path="/managebookings" element={<Booking/>} />
          <Route path="/pembayaran/:id" element={<Pembayaran/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
