import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
const AddUser = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const {name,username,email,phone,website}=user;

    const HandleSubmit = async (e) =>{
        e.preventDefault();
        console.log("user",user);
        
        await axios.post("https://jsonplaceholder.typicode.com/users",user).then((respone)=>{
            console.log("response",respone);
        }).then((result)=>{
             console.log(result);
        })
        navigate('/')
    }

    const onInputChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value});  
    }
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={HandleSubmit}>
          <div>
            <input
              type="text"
              className="form-control mb-3 form-control-lg"
              placeholder="Enter Your Name"
              name='name'
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control mb-3 form-control-lg"
              placeholder="Enter Your User Name"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
           
            <input
              type="email"
              className="form-control mb-3 form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            required/>
          </div>
          <div>
           
            <input
              type="text"
              className="form-control mb-3 form-control-lg"
              placeholder="Enter Your Phone Numbar"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div>
           
            <input
              type="text"
              className="form-control mb-3 form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button type="text" className="btn btn-primary w-100 mx-auto shadow m-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
