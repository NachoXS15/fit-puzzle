import { useEffect, useState } from "react";
import "./Board.css";
import { Tile, selectedBlock } from "../tile/Tile";
import Overlay from "../overlay/Overlay";
import NewGame from "../new-game/NewGame";
import Referencia from "../referencia/Referencia";
import "../modal/modal.css";
import Winner from "../winner/Winner";

const Board = () => {
  const shuffle = () =>
    new Array(8)
      .fill()
      .map((_, i) => i + 1)
      .sort(() => Math.random() - 0.5)
      .map((x, i) => ({ value: x, index: i }));

  const [numbers, setNumbers] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reset = () => setNumbers(shuffle());

  const reloadPage = () => {
    window.location.reload();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const moveTile = (tile) => {
    const i8 = numbers.find((n) => n.value === 8).index;
    if (![i8 - 1, i8 + 1, i8 - 4, i8 + 4].includes(tile.index) || animating)
      return;

    const newNumbers = [...numbers].map((number) => {
      if (number.index !== i8 && number.index !== tile.index) return number;
      else if (number.value === 8) return { value: 8, index: tile.index };

      return { value: tile.value, index: i8 };
    });
    setAnimating(true);
    setNumbers(newNumbers);
    setTimeout(() => setAnimating(false), 200);
  };

  const handleKeyDown = (e) => {
    const i8 = numbers.find((n) => n.value === 8).index;
    if (e.keyCode === 37 && !(i8 % 4 === 3))
      moveTile(numbers.find((n) => n.index === i8 + 1));
    else if (e.keyCode === 38 && !(i8 > 11))
      moveTile(numbers.find((n) => n.index === i8 + 4));
    else if (e.keyCode === 39 && !(i8 % 4 === 0))
      moveTile(numbers.find((n) => n.index === i8 - 1));
    else if (e.keyCode === 40 && !(i8 < 4))
      moveTile(numbers.find((n) => n.index === i8 - 4));
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
  useEffect(reset, []);

  return (
    <div className="game">
      <a href="https://fit-interactive.netlify.app" style={{position: 'absolute', right: '-200px', top: '-40px'}}>
        <img src="/img/cruz.png" alt="cruz" />
      </a>
      <div className="board">
        <Overlay size={8} />
        {numbers.map((x, i) => {
          return <Tile key={i} number={x} moveTile={moveTile} />;
        })}
      </div>
      <Winner numbers={numbers} reset={reset} />
      <NewGame reset={reloadPage} />
      <Referencia modal={openModal} />
      {isModalOpen && (
        <div id="referenceModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              id="referenceImage"
              src={selectedBlock.referenceImg}
              alt="Imagen de Referencia"
              width="1000"
            />
          </div>
          {/* {console.log(selectedBlock.referenceImg)} */}
        </div>
      )}
    </div>
  );
};

export default Board;
