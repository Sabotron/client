import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import '../css/Login.css';
import RegisterModal from '../components/RegisterModal';

const Login = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [users, setUsers] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const BaseUrl = "https://server-production-78e2.up.railway.app/user/";

    function openRegModal() {
        setOpenModal(true);
    }

    function getUsername(e) { // obtiene el valor del texfield nombre o email
        setUsername(e.target.value);
    }

    function getPassword(e) { // obtiene el valor del texfield password
        setPassword(e.target.value);
    }

    // revisa que el usuario haya ingresado una cantidad mínima de caracteres
    const inputChecker = () => {
        if (username.length < 4 ||
            password.length < 5) {
            alert("Use a valid user name and password!");
        } else {
            checkUser();
        }
    }


    const checkUser = async () => { // trae todos los usuarios y filtra el requerido si existiera.
        await axios.get(BaseUrl)
            .then(response => {
                setUsers(response.data);
                for (let i = 0; i < users.length; i++) {
                    if (users[i].username === username || users[i].email === username) {
                        if (users[i].password === password) {
                            let user = users[i];
                            cookies.set('id', user.id, { path: "/" });
                            cookies.set('username', user.username, { path: "/" });
                            navigate('/home');
                            break;
                        }
                    }
                }

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <>
            <h1>Examen Final</h1>
            <div className='Login'>
                <h2>Log in</h2>
                {openModal && <RegisterModal setOpenModal={setOpenModal} />}
                <input type="text" className='texfield' placeholder='Username or Email' onChange={getUsername} />
                <input type="password" className='texfield' placeholder='Password' onChange={getPassword} />
                <div className='button-container'>
                    <input type="button" className='btn_register' value={'Register'} onClick={() => openRegModal()} />
                    <input type="button" className='btn_access' value={'Log In'} onClick={() => { inputChecker() }} />
                </div>
            </div>
        </>
    )
}

export default Login