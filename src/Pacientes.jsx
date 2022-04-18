import "./Pacientes.css"
import { Link } from "react-router-dom"

export default function Pacientes() {
    return (
       <div>
           <button className="b1">Borrar</button>
           <button className="b2">Editar</button>
           <Link to="/Addpaciente">
           <button className="b3">Añadir </button>
           </Link>
           <text className="t1">Pacientes</text>
           <div className="active-pink-3 active-pink-4">
           <input className="form-control" type="text" placeholder="Buscar Paciente" aria-label="Search"/></div>
       </div>
    )
}