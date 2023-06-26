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
import UploadGambar from "./pages/uploadgambar";
import PropertyDetail from "./components/kontrakandetails";
import Booking from "./pages/Booking";
import EditBooking from "./pages/EditBooking"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login/login" element={<Login />} />
          <Route path="/uploadgambar" element={<UploadGambar />} />
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
            path="/kontrakan/:kontrakanId"
            element={<PropertyDetail />}
          />
          <Route path="/managebookings" element={<Booking/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
