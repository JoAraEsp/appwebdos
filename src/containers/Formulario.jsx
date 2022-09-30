import "../assets/styles/Formulario.css";
import Submit from "../components/InputSubmit";
import DatosP from "./DatosP";
import Resto from "./Resto";


function Formulario() {
  return (
    <>
      <div className="formulario">
        <div className="titulo"><h1>Registro de alumnos: </h1></div>
          <DatosP></DatosP>
          <Resto></Resto>
          <Submit></Submit>
      </div>
    </>
  );
}

export default Formulario;
