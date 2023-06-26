import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../profile.JPG";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };


  return (
    <>
    {users.map((user, index) => (
        <tr key={user.uuid}>
          <td>{logo}</td>
        </tr>
      ))} </>
  );
};

export default Userlist;
