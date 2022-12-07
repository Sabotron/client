import { useState } from 'react';
import axios from 'axios';
import '../css/Modal.css';

const RegisterModal = (props) => {
  const postUrl = "server-production-78e2.up.railway.app/user/";
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  })

  const newUser = { ...user };
  function handleChange(e) {
    newUser[e.target.id] = e.target.value;
    setUser(newUser);
  }

const inputChecker=()=>{
  if(newUser.username.length > 3 &&
    newUser.email.length > 8 &&
    newUser.password.length > 5){
      addUser(newUser);
    } else {
      alert("Must fill the blanks!");
    }
}

  const addUser = async () => {
    await axios.post(postUrl, newUser)
      .then(res => {
      })
      .then(alert("User account created!"))
      .then(props.setOpenModal(false))
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className='modalBackground'>
      <div className='Register'>
        <h2>Register</h2>
        <input type='text' className='texfield' placeholder='Username' onChange={(e) => handleChange(e)} id="username" required />
        <input type='text' className='texfield' placeholder='Email' onChange={(e) => handleChange(e)} id="email" required />
        <input type='password' className='texfield' placeholder='Password' onChange={(e) => handleChange(e)} id="password" required /> 
        <div className='button-container'>
          <input type="button" className='btn_back' value={'Back'} onClick={() => props.setOpenModal(false)} />
          <input type="submit" className='btn_access' value={'Accept'}  onClick={() => { inputChecker(newUser) }}/>
        </div>
      </div>
    </div>
  )
}
export default RegisterModal

