function Sexo() {
    return ( <>
    <div className="separador">
          <label>Sexo:</label>
          <br />
          <div className="separador">
          <input type="radio" /><label>Hombre</label>
          <input type="radio" /><label>Mujer</label>
          </div>
    </div>
    </> );
}

export default Sexo;