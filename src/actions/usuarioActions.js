import {LISTAR_USUARIOS, CREAR_USUARIO, EDITAR_USUARIO, BUSCAR_USUARIO, ELIMINAR_USUARIO, MOSTRAR_USUARIO} from "./types.js";
import axios from "axios";

//const URL = "http://localhost:5000/usuarios";
const URL = "http://my-json-server.typicode.com/alejandrozuniga1061/netlify-prueba/usuarios";

export const listarUsuarios = () => async dispatch => {
    //return {type: LISTAR_USUARIOS}
    const respuesta = await axios.get(URL);
    
    dispatch({
        type: LISTAR_USUARIOS,
        payload: respuesta.data
    });
}

export const crearUsuario = (usuario) =>  async dispatch =>{
    const respuesta = await axios.post(URL, usuario);
    dispatch({
        type: CREAR_USUARIO,
        payload: respuesta.data
    });
}

export const editarUsuario = (usuario)  =>  async dispatch =>{
    const respuesta = await axios.put(URL.concat(`/${usuario.id}`), usuario);
    
    dispatch({
        type: EDITAR_USUARIO,
        payload: respuesta.data
    });
}

export const buscarUsuario = (id) => async dispatch =>{ 
    const respuesta = await axios.get(URL.concat(`/${id}`));
    dispatch({
        type: BUSCAR_USUARIO,
        payload: respuesta.data
    });
}

export const eliminarUsuario = (id) => async dispatch =>{ 
    const respuesta = await axios.delete(URL.concat(`/${id}`));
    console.debug(respuesta);
    
    dispatch({
        type: ELIMINAR_USUARIO,
        payload: id
    });
}