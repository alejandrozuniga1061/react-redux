import { LISTAR_USUARIOS, CREAR_USUARIO, EDITAR_USUARIO, BUSCAR_USUARIO, ELIMINAR_USUARIO} from "../actions/types";

const estadoInicial = {
    usuarios: [
    ]
}

//Se realiza con la 'API'
const editarUsuario = (usuario, state) =>{  
    let usuarioAnterior = state.usuarios.find(function(element) {
        return element.id == usuario.id;
    });
    usuarioAnterior.nombre = usuario.nombre;   
    
    return state;
}

//Se realiza con la 'API'
const buscarUsuario = (id) => {
    let usuario = estadoInicial.usuarios.find(function(element) {
        return element.id == id;
    });
    return {...estadoInicial, usuario: usuario};
}

const eliminarUsuario = (id, state)=>{
    let lista = state.usuarios;
    lista = lista.filter(element => {
      return element.id != id;
    });
    return {...state, usuarios: lista};
}

export default function (state = estadoInicial, action) {
    switch (action.type) {
        case LISTAR_USUARIOS: 
            return {...state, usuarios: action.payload};
        case CREAR_USUARIO:
            return { ...state, usuarios: [...state.usuarios, { id: (state.usuarios.length + 1), nombre: action.payload.nombre }] };
        case EDITAR_USUARIO:
            return editarUsuario(action.payload, state);
        case BUSCAR_USUARIO:
            return {...state, usuario: action.payload};
        case ELIMINAR_USUARIO:
            return eliminarUsuario(action.payload, state);
        default:
            return state;
    }
}