import 'bootstrap/dist/css/bootstrap.css';
import "./Addconsultas.css";
import profile from "./img/pp.png"

export default function Addconsultas() {
    return ( 
        <div>  
        <div className="Container">
        <label className="i6"> Nombre <input className="i23" type="text" name="Nombre" /> </label>
        <label className="i7"> Apellidos <input className="i24" type="text" name="Apellidos" /> </label>
        <label className="i8"> Cédula <input className="i25" type="text" name="Cédula" /> </label>
        <label className="i9"> Teléfono <input className="i26" type="text" name="Teléfono" /> </label>
        <label className="i10"> Género <input className="i27" type="text" name="Género" /> </label>
        <label className="i11"> Fecha de Nacimiento <input className="i28" type="text" name="FDN" /> </label>
        <label className="i12"> Edad <input className="i29" type="text" name="Edad" /> </label>
        <label className="i13"> Correo <input className="i30" type="text" name="Correo" /> </label>
        <label className="i14"> Dirección <input className="i31" type="text" name="Dirección" /> </label>
        <label className="i15"> Estado <input className="i32" type="text" name="Estado" /> </label>
        <label className="i16"> Tipo de Sangre <input className="i33" type="text" name="Tipo de Sangre" /> </label>
        <label className="i17"> Seguro Afiliado <input className="i34" type="text" name="Seguro Afiliado" /> </label>
        </div>
        <div>
            <input className="save2" type="submit" value="Guardar Cambios" />
            <input className="bt11" type="submit" value="Antecedendes" />
            <input className="bt12" type="submit" value="Parientes" />
            <input className="bt13" type="submit" value="Analíticas" />
            <input className="bt14" type="submit" value="Historial de Visitas" />
            <input className="bt15" type="submit" value="Historial de Vacunas" />
        </div>
        <div>
                <label className="i18"> Motivo de la Consulta <input className="i1" type="text" name="Motivo de la Consulta" /> </label>
                <label className="i19"> Hallazgos <input className="i2" type="text" name="Hallazgos" /> </label>
                <label className="i20"> Diagnósticos <input className="i3" type="text" name="Diagnosticos" /> </label>
                <label className="i21"> Tratamiento <input className="i4" type="text" name="Tratamiento" /> </label>
                <label className="i22"> Observaciones <input className="i5" type="text" name="Observaciones" /> </label>
        </div>
        <div>
            <img src={profile} className="pp2"/>
        </div>
        </div>
    )
}