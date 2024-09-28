import NewGame from "../new-game/NewGame";
import "./Winner.css";
import { selectedBlock } from "../tile/Tile";

const Winner = ({ numbers, reset }) => {
  if (!numbers.every((n) => n.value === n.index + 1)) return null;

  return (
    <div className="winner">
      <p>¡Ganaste!</p>
      <img
        id="referenceImage"
        src={selectedBlock.referenceImg}
        alt={selectedBlock.text}
        width="1000"
      />
      <NewGame reset={reset} />
    </div>
  );
};

export default Winner;
