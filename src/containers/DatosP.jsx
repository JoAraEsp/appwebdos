import "../assets/styles/InputTwo.css";
import Edad from "../components/InputEdad";
import Email from "../components/InputEmail";
import FechaNacimiento from "../components/InputFNacimiento";
import Nombre from "../components/InputNombre";
import Telefono from "../components/InputTelefono";

function DatosP() {
  return (
    <>
      <div className="nombreC">
        <Nombre></Nombre>
        <Edad></Edad>
        <Email></Email>
        <FechaNacimiento></FechaNacimiento>
        <Telefono></Telefono>
      </div>
    </>
  );
}

export default DatosP;
