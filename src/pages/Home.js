import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import NavBar from '../components/NavBarHome';
import { useNavigate } from 'react-router-dom';

import '../css/Home.css';

const Home = () => {

  const navigate = new useNavigate();
  const cookies = new Cookies();
  const userId = cookies.get('id');
  const username = cookies.get('username');



  useEffect(() => {
    if (userId == undefined) { navigate('/') }
  
  }, []);

  return (
    <>
      <h1>Examen Final</h1>
      <div className='Home'>
        <NavBar name={username} id={userId} />
        <h2>Estudiante: Hanzel Roberto Quirós Beteta</h2>
      </div>
    </>
  )
}

export default Home