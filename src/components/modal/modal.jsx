import "./modal.css";

const closeModalBtn = () => {
  modal.style.display = "none";
};

// Cerrar modal si el usuario hace clic fuera de él
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

export const modal = (referenceImage) => {
  return (
    <div id="referenceModal" className="modal">
      <div className="modal-content">
        <span className="close" onclick="closeModalBtn">
          &times;
        </span>
        <img
          id="referenceImage"
          src={{ referenceImage }}
          alt="Imagen de Referencia"
          width="1000"
        />
      </div>
    </div>
  );
};
