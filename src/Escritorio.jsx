import "./Escritorio.css"
import pacon from "./img/pacon.png"
import pac from "./img/pac.png"
import cit from "./img/cit.png"
import csc from "./img/csc.png"
import apac from "./img/apac.png"
import anse from "./img/anse.png"

export default function Escritorio() {
    return(
        <div>
           <img src={pacon} className="pacon"/>
           <img src={pac} className="pac"/>
           <img src={cit} className="cit"/>
           <img src={csc} className="csc"/>
           <img src={apac} className="apac"/>
           <img src={anse} className="anse"/>
           <text className="t2">Pacientes</text>
        </div>
    );
}