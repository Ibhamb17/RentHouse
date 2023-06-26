// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const UploadGambar = () => {
//     const [namaFile, setName] = useState("");
//     const [pathFile, setFile] = useState("");
//     const [msg, setMsg] = useState("");
//     const navigate = useNavigate();
//     const { id } = "1";
  
//     useEffect(() => {
//       const getMateriById = async () => {
//         try {
//           const response = await axios.get(`http://localhost:5000/materis/${id}`);
//           setName(response.data.namaFile);
//           setFile(response.data.pathFile);
//         } catch (error) {
//           if (error.response) {
//             setMsg(error.response.data.msg);
//           }
//         }
//       };
//       getMateriById();
//     }, [id]);
  
//     const updateMateri = async (e) => {
//       e.preventDefault();
//       try {
//         await axios.patch(`http://localhost:5000/kontrakan/${id}/gambar`, {
//           namaFile: namaFile,
//           pathFile: pathFile,
//         });
//         navigate("/uploadgambar");
//       } catch (error) {
//         if (error.response) {
//           setMsg(error.response.data.msg);
//         }
//       }
//     };
//     return (
//       <div>
//         <h1 className="title has-text-centered">Manage Materi</h1>
//         <h2 className="subtitle has-text-centered">Update Materi</h2>
//         <div className="card is-shadowless">
//           <div className="card-content">
//             <div className="content">
//               <form onSubmit={updateMateri}>
//                 <p className="has-text-centered">{msg}</p>
//                 <div className="field">
//                   <label className="label">Name</label>
//                   <div className="control">
//                     <input
//                       type="text"
//                       className="input"
//                       value={namaFile}
//                       onChange={(e) => setName(e.target.value)}
//                       placeholder="Name"
//                     />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Link Materi</label>
//                   <div className="control">
//                     <input
//                       type="text"
//                       className="input"
//                       value={pathFile}
//                       onChange={(e) => setFile(e.target.value)}
//                       placeholder="Email"
//                     />
//                   </div>
//                 </div>
//                 <div className="field">
//                   <div className="control">
//                     <button type="submit" className="button is-success">
//                       Update
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

// export default UploadGambar;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadGambar = () => {
  const [namaFile, setNamaFile] = useState("");
  const [pathFile, setPathFile] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const id = "1";

  useEffect(() => {
    const getMateriById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/materis/${id}`);
        setNamaFile(response.data.namaFile);
        setPathFile(response.data.pathFile);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getMateriById();
  }, [id]);

  const updateMateri = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kontrakan/1/gambar`, {
        namaFile: namaFile,
        pathFile: pathFile,
      });
      navigate("/uploadgambar");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title has-text-centered">Manage Materi</h1>
      <h2 className="subtitle has-text-centered">Update Materi</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateMateri}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namaFile}
                    onChange={(e) => setNamaFile(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">gambar</label>
                <div className="control">
                  <input
                    type="file"
                    className="input"
                    value={pathFile}
                    onChange={(e) => setPathFile(e.target.value)}
                    placeholder="Email"
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

export default UploadGambar;
