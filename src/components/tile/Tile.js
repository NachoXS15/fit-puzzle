import "./Tile.css";
import pieces from "../../pieces.js";

export let selectedBlock = null;

const blockIndex = Math.floor(Math.random() * 4) + 1; // Cambia 5 si tienes más bloques
selectedBlock = pieces.find((b) => b.block === blockIndex); // Guarda el bloque seleccionado

export const Tile = ({ number, moveTile }) => (
  <div
    onClick={() => moveTile(number)}
    className={`number ${number.value === number.index + 1 ? "correct" : ""} ${
      number.value === 8 ? "disabled" : ""
    } slot--${number.index}`}
    style={
      number.value === 8
        ? {}
        : {
            backgroundImage: `url('${
              selectedBlock.pieces[number.value].pieceImg
            }')`,
          }
    }
  >
    {number.value === 8 ? "" : number.value}
  </div>
);

// export default Tile;
