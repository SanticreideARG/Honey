import React, {useContext} from "react"
import { useNavigate,} from "react-router-dom";
import { createOrdenCompra, getProducto, updateProducto } from "../../assets/firebase"
import { CartContext } from "../../context/CartContext"

const Checkout = () => {
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const {cart,emptyCart, totalPrice} = useContext(CartContext);

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const valores = Object.fromEntries(datForm)
        const aux = [...cart]
        aux.forEach(producto =>{
            getProducto(producto.id)
            .then(prod=> {
                prod.stock -= producto.cant
                updateProducto(producto.id, prod)
            })
        })
        
        createOrdenCompra(cart, valores, totalPrice(), new Date().toISOString().slice(0, 16)).then(orden => {
            console.log(`Su orden ${orden.id} fue creada con éxito`)
            emptyCart()
            e.target.reset()
            navigate(`/sucess/${orden.id}`)

        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="container mt-4">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
            <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" name="apellido" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <div className="mb-3">
                <label htmlFor="payment" className="form-label">Metodo de pago</label>
                    <select className="ms-4" name="payment" id="payment">
                    <option value="mercadopago">Mercadopago</option>
                    <option value="transference">Transferencia Bancaria</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>
            </div>
    );
}

export default Checkout;