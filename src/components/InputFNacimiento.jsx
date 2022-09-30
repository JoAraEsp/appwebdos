import "../assets/styles/InputOne.css";

function FechaNacimiento() {
    return ( <>
        <div className="separador">
          <label>Fecha de Nacimiento</label>
          <br />
          <input type="date" className="input_calendar"/>
        </div>
    </> );
}

export default FechaNacimiento;