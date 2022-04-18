import "./Navbar.css"
import Consultas from "./Consultas";
import Escritorio from "./Escritorio";
import Pacientes from "./Pacientes";
import Addpaciente from "./Addpaciente";
import Addconsultas from "./Addconsultas";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./img/logo.png"
import word from "./img/white.png"
import iescritorio from "./icons/escritorio.png"
import iagenda from "./icons/agenda.png"
import iantecedentes from "./icons/antecedentes.png"
import iasistentes from "./icons/asistentes.png"
import icitas from "./icons/citas.png"
import iconfiguracion from "./icons/configuracion.png"
import iconsultas from "./icons/consultas.png"
import iconsultorios from "./icons/consultorios.png"
import idiagnosticos from "./icons/diagnosticos.png"
import ihistorialmedico from "./icons/historialmedico.png"
import ihistorialvacuna from "./icons/historialvacuna.png"
import iinformes from "./icons/informes.png"
import ipacientes from "./icons/pacientes.png"
import ipersonalizar from "./icons/personalizar.png"
import irecomendaciones from "./icons/recomendaciones.png"
import ivisitas from "./icons/visitas.png"

export default function NavBar() {
    return(
            <nav>
                <img src={logo} className="logo"/>
                <img src={word} className="logo2"/>
                <ul>
                    <li image src= {iescritorio}> <img src={iescritorio} className="logo3"/> <a className="escritorio" href="/">Escritorio</a> </li>
                    <li image src= {iagenda}> <img src={iagenda} className="logo4"/> <a className="agenda" href="#">Agenda</a> </li>
                    <li image src= {iconsultorios}> <img src={iconsultorios} className="logo5"/> <a className="consultorios" href="#">Consultorios</a></li>
                    <li image src= {icitas}> <img src={icitas} className="logo6"/> <a className="citas" href="#">Citas</a></li>
                    <li image src= {ivisitas}> <img src={ivisitas} className="logo7"/> <a className="visitas" href="#">Visitas</a></li>
                    <li image src= {iantecedentes}> <img src={iantecedentes} className="logo8"/> <a className="antecedentes" href="#">Antecedentes</a></li>
                    <li image src= {idiagnosticos}> <img src={idiagnosticos} className="logo9"/> <a className="diagnosticos" href="#">Diagnósticos</a></li>
                    <li image src= {irecomendaciones}> <img src={irecomendaciones} className="logo10"/> <a className="recomendaciones" href="#">Recomendaciones</a></li>
                    <li image src= {ihistorialmedico}> <img src={ihistorialmedico} className="logo11"/> <a className="historialmedico" href="#">Historiales Médicos</a></li>
                    <li image src= {ihistorialvacuna}> <img src={ihistorialvacuna} className="logo12"/> <a className="historialvacuna" href="#">Historiales Vacunas</a></li>
                    <li image src= {iasistentes}> <img src={iasistentes} className="logo13"/> <a className="asistentes" href="#">Asistentes</a></li>
                    <li image src= {ipacientes}> <img src={ipacientes} className="logo14"/> <a className="pacientes" href="/Pacientes">Pacientes</a></li>
                    <li image src= {iinformes}> <img src={iinformes} className="logo15"/> <a className="informes" href="#">Informes</a></li>
                    <li image src= {iconsultas}> <img src={iconsultas} className="logo16"/> <a className="consultas" href="/Consultas">Consultas</a> </li>
                    <hr/>
                    <li image src= {ipersonalizar}> <img src={ipersonalizar} className="logo17"/> <a className="personalizar" href="#">Personalizar</a></li>
                    <li image src= {iconfiguracion}> <img src={iconfiguracion} className="logo18"/> <a className="configuracion" href="#">Configuración</a></li>
                </ul>
                <Router>
                <Routes>
                <Route exact path="/Consultas" element={<Consultas/>}/>
                <Route exact path="/" element={<Escritorio/>}/>
                <Route exact path="/Pacientes" element={<Pacientes/>}/>
                <Route exact path="/Addpaciente" element={<Addpaciente/>}/>
                <Route exact path="/Addconsultas" element={<Addconsultas/>}/>
                </Routes>
                </Router>
            </nav>
    );
}
