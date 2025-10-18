import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'
import "../css/Checkout.css"
import Swal from 'sweetalert2'

const Checkout = () => {
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clear } = useContext(CartContext)
    const { register, handleSubmit, formState: { errors }, getValues } = useForm()


    const finalizarCompra = (dataForm) => {

        let order = {
            comprador: {
                name: dataForm.name,
                lastname: dataForm.lastname,
                address: dataForm.address,
                email: dataForm.email,

            },
            compras: cart,
            total: total(),
            fecha: serverTimestamp()
        }

        const ventas = collection(db, "orders")

        addDoc(ventas, order)
            .then((res) => {
                setOrderId(res.id)
                Swal.fire({
                    icon: "success",
                    title: `Realizaste tu compra correctamente!`,
                    showConfirmButton: false,
                    timer: 3000
                })
                clear()
            })
            .catch((error) => console.log(error))

    }

    if (!cart.length && !orderId) {
        return <EmptyCart />
    }

    return (
        <>
            {
                orderId
                    ? <div className='CheckoutContenedor'>
                        <h3 className='CheckoutSubtitulo'>El ID de la compra es: <span>{orderId}</span></h3>
                    </div>
                    : <div>
                        <h1 className='FormularioTitulo'>Complete el formulario con sus datos</h1>
                        <form className='FormularioContenedor' onSubmit={handleSubmit(finalizarCompra)}>
                            <input name='name' className='form-control' placeholder='Ingrese su nombre' type="text" {...register("name", { required: true, minLength: 3 })} />
                            {errors?.name?.type === "required" && <span style={{ color: 'red' }}>Por favor complete el campo.</span>}
                            {errors?.name?.type === "minLength" && <span style={{ color: 'red' }}>El nombre debe de contener minimo tres caracteres.</span>}
                            <input name='lastname' className='form-control' placeholder='Ingrese su apellido' type="text" {...register("lastname", { required: true, minLength: 3 })} />
                            {errors?.lastname?.type === "required" && <span style={{ color: 'red' }}>Por favor complete el campo.</span>}
                            {errors?.lastname?.type === "minLength" && <span style={{ color: 'red' }}>El apellido debe de contener minimo tres caracteres.</span>}
                            <input name='address' className='form-control' placeholder='Ingrese su dirección de envio' type="text" {...register("address", { required: true, minLength: 10, maxLength: 25 })} />
                            {errors?.address?.type === "required" && <span style={{ color: 'red' }}>Por favor complete el campo.</span>}
                            {errors?.address?.type === "minLength" && <span style={{ color: 'red' }}>La dirección debe de tener al menos diez caracteres.</span>}
                            {errors?.address?.type === "maxLength" && <span style={{ color: 'red' }}>La dirección es demasiado larga.</span>}
                            <input name='email' className='form-control' placeholder='Ingrese su correo' type="email" {...register("email", { require: true })} />
                            {errors?.email?.type === "required" && <span style={{ color: 'red' }}>Por favor complete el campo.</span>}
                            <input name='secondemail' className='form-control' placeholder='Repita su correo' type="email" {...register("secondemail", { require: true, validate: { equalsMails: mail2 => mail2 === getValues().email } })} />
                            {errors?.secondemail?.type === "required" && <span style={{ color: 'red' }}>Por favor complete el campo.</span>}
                            {errors?.secondemail?.type === "equalsMails" && <span style={{ color: 'red' }}>Los mails deben de ser iguales.</span>}
                            <button type='submit' className='btn btn-primary'>Completar Compra</button>
                        </form>
                    </div>
            }
        </>
    )
}

export default Checkout