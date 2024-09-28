import "./NewGame.css";

const NewGame = ({ reset }) => (
  <div className="button-wrapper">
    <button onClick={reset}>Nuevo juego</button>
  </div>
);

export default NewGame;
