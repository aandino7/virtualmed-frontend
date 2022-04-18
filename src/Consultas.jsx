import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Consultas.css"
import { Link } from "react-router-dom"

export default function Consultas() {
    return (
        <div>
        <button className="b1">Borrar</button>
        <button className="b2">Editar</button>
        <Link to="/Addconsultas">
        <button className="b3">Añadir </button>
        </Link>
        <text className="t1">Pacientes</text>
        <div className="active-pink-3 active-pink-4">
        <input className="form-control" type="text" placeholder="Buscar Consultas" aria-label="Search" />
        </div>
    <div>
    <input className="bt16" type="submit" value="Preescripciones" />
    <input className="bt17" type="submit" value="Funciones Especializadas" />
    <input className="bt18" type="submit" value="Resumen de Consultas" />
    </div>
    </div>
    )
}