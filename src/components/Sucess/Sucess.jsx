import Sucessimg from './img/sucess.svg'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Sucess = () => {
    const { id } = useParams();


  console.log(id)
    return (
        <div className='container center-this pt-3'>
            <h2  className='center-this pt-3 sec-title'>Gracias por tu compra!</h2>
            <p className='center-this pt-3'>Su numero de compra es # {id}</p>
            <p className='text-center pt-4 pb-3'>Recibirás un correo electrónico a la brevedad para completar tu compra!</p>
            <img className='center-this' src={Sucessimg} alt="" />
            <Link to={'/'}><button className="btn btn-dark center-this mt-4">Ir al inicio</button></Link>
        </div>
    );
}

export default Sucess;
