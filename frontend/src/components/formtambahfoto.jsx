import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const FormEditKontrakan = () => {
  const [fotoKontrakan, setName] = useState("");
  const [alamatKontrakan, setAdress] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [availability, setAvailability] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getKontrakanByid = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/kontrakan/${id}`);
        setName(response.data.fotoKontrakan);
        setAdress(response.data.alamatKontrakan);
        setKeterangan(response.data.keterangan);
        setAvailability(response.data.availability);
        setPrice(response.data.price);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getKontrakanByid();
  }, [id]);

  
  const updateKontrakan = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kontrakan/${id}`, {
        fotoKontrakan: fotoKontrakan,
        alamatKontrakan: alamatKontrakan,
        keterangan: keterangan,
        availability: availability,
        price: price,
      });
      // Tampilkan Sweet Alert setelah berhasil memperbarui
      Swal.fire({
        title: "Sukses!",
        text: "Tampilan data kontrakan diperbarui",
        icon: "success",
        confirmButtonText: "Selesai",
        showCancelButton: true,
        cancelButtonText: "Edit Data Lain",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/managekontrakan");
        }
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title has-text-centered">Manage Kontrakan</h1>
      <h2 className="subtitle has-text-centered">Update Kontrakan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateKontrakan}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Foto</label>
                <div className="control">
                  <input
                    type="file"
                    className="input"
                    value={fotoKontrakan}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditKontrakan;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const FormEditProduct = () => {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const getMateriById = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/materis/${id}`
//         );
//         setName(response.data.nama_materi);
//         setPrice(response.data.link_materi);
//       } catch (error) {
//         if (error.response) {
//           setMsg(error.response.data.msg);
//         }
//       }
//     };
//     getMateriById();
//   }, [id]);

//   const updateMateri = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.patch(`http://localhost:5000/materis/${id}`, {
//         nama_materi: name,
//         link_materi: price,
//       });
//       navigate("/managemateri");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Edit Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={updateMateri}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Product Name"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Price</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     placeholder="Price"
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Update
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormEditProduct;
