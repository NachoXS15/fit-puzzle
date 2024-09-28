import "./Referencia.css";

const Referencia = ({ modal, block }) => (
  <div className="button-wrapper">
    <button onClick={() => modal(block)}>Referencia</button>
  </div>
);

export default Referencia;
