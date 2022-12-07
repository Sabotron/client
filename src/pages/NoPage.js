import { useNavigate } from "react-router-dom";
import '../css/Login.css';

const NoPage = () => {
const navigate = useNavigate();
  return (
    <>
    <h1>Social Hub</h1>
      <div className='Home'>
        <h1>Error 404</h1>
        <h2>Page not found!</h2>
        <input type="button" className='btn_back' value={'Back'} onClick={() => navigate('/home')} />
      </div>
    </>
  )
}
export default NoPage;
