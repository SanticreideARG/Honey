import React from 'react';
import { useNavigate,} from "react-router-dom";
import './admin.css'


const AdminLogin = () => {
    
    const datosLogin = React.useRef()
    let navigate = useNavigate()
    const definedUser = 'admin'
    const definedPass = 'admin'
    let loginMessage = ''
    const consultarLogin = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosLogin.current)
        const valores = Object.fromEntries(datForm)
        valores.user === definedUser && valores.pass === definedPass ?
        navigate("/adminBoard/", {permission: 'granted'}):
        loginMessage = 'Usuario o contraseña incorrectos. Intente Nuevamente'
        e.target.reset()
        }


    return (
        <div className='container'>
            <h3 className="mt-4 mb-4 center-this sec-title">Menu de Administracion</h3>
            <h6 className='center-this'>Ingrese su usuario y contraseña</h6>
            <form className='login-styles mt-4' onSubmit={consultarLogin} ref={datosLogin}>
                <label className='center-this' htmlFor="user">Usuario</label>
                <input className='center-this' type="text" name='user'/>
                <label className='center-this' htmlFor="pass">Password</label>
                <input className='center-this' type="password" name='pass' />
                <button type="submit" className="btn btn-primary center-this mt-3">Ingresar</button>
                <p>{loginMessage}</p>
            </form>
        </div>
    );
}

export default AdminLogin;
