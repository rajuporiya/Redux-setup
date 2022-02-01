import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEye,FaEdit} from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);

  const preload = async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    setUsers(result.data)
    console.log(result);
  }

 useEffect(() => {
  preload()
 }, [])

  const handleDelete = async (id) => {
      const result = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      preload();
  }
  return (
    <div>
      <h1>Home Page</h1>
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                  <Link className="btn btn-primary m-2" to={`/users/${user.id}`}><FaEye/></Link>
                  <Link className="btn btn-outline-primary m-2" to={`/users/edit/${user.id}`}><FaEdit/></Link>
                  <h1 className="btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</h1>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
