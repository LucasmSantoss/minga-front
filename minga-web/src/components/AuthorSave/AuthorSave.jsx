import { useRef } from 'react'
import './authorsave.css'
import axios from 'axios'
import Image from "../Image/Image";


export default function AuthorSave() {


    let name = useRef()
    let lastname = useRef()
    let city = useRef()
    let date = useRef()
    let urlimage = useRef()

    async function handleSubmit(event) {
        event.preventDefault()
        let data = {
            [name.current.name]: name.current.value,
            [lastname.current.name]: lastname.current.value,
            [city.current.name]: city.current.value,
            [date.current.name]: date.current.value,
            [urlimage.current.name]: urlimage.current.value
        }
        let url = 'http://localhost:8080/users'
        try {
            await axios.post(
                url,    /* URL del endpoint para crear una categoria */
                data    /* objeto necesario para crear una categoria (tal cual lo armo en postman) */
            )
            //si el status es 200 el manejo de errores de validacion lo tengo que hacer acá
        } catch (error) {
            //si el status es 400 (o cualquier otro de error) el manejo de errores de validacion lo tengo que hacer acá
            console.log(error)
            let err = error.response.data.message
            alert(err)
            console.log('ocurrio un error')
        }
    }

    return (
        <div className='author-form' onSubmit={handleSubmit}>
            <form className='form-container' >
                <Image src="./imgs/killua.png" id="avatar" alt="avatar" />

                <input ref={name} type="text" id="name" name='name' placeholder='Name' required />

                <input ref={lastname} type="text" id="lastname" name='lastname' placeholder='Last name' required />

                <input ref={city} type="text" id='city' name='city' placeholder='City, Country' required />

                <input ref={date} type="date" id='date' name='date' placeholder='Date' />

                <input ref={urlimage} type="text" id='urlimage' name='urlimage' placeholder='Url Profile image' required />
                <input type="submit" value="Save" id='save' />
                {/* <Anchor to={`/notfound/${Math.random() * 1000}`}> */}
                <input type="submit" value="Delete Account" id='delete' />
                {/* </Anchor> */}
            </form>
        </div>
    )
}
