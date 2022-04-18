import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Addpaciente.css";
import profile from "./img/pp.png"

export default function Addpaciente() {
  return(
    <div>
    <div className="Container">
    <label className="y2"> Nombre <input className="m2" type="text" name="Nombre"/> </label>
    <label className="y3"> Apellidos <input className="m3" type="text" name="Apellidos"/> </label>
    <label className="y4"> Cédula <input className="m4" type="text" name="Cédula"/> </label>
    <label className="y5"> Teléfono <input className="m5" type="text" name="Teléfono"/> </label>
    <label className="y6"> Género <input className="m6" type="text" name="Género"/> </label>
    <label className="y7"> Fecha de Nacimiento <input className="m7" type="text" name="FDN"/> </label>
    <label className="y8"> Edad <input className="m8" type="text" name="Edad"/> </label>
    <label className="y9"> Correo <input className="m9" type="text" name="Correo"/> </label>
    <label className="y10"> Dirección <input className="m10" type="text" name="Dirección"/> </label>
    <label className="y11" > Estado <input className="m11" type="text" name="Estado"/> </label>
    <label className="y12"> Tipo de Sangre <input className="m12" type="text" name="Tipo de Sangre"/> </label>
    <label className="y13"> Seguro Afiliado <input className="m13" type="text" name="name"/> </label>
    </div>
    <div> 
    <input className="save" type="submit" value="Guardar Cambios"/>
    </div>
    <img src={profile} className="pp1"/>
    </div>
  )
}