import React from "react";
import "./index.scss";

const modal = ({ open, onClose, onDelete, taskText }) => {
  if (!open) return null;
  return (
    <div className="modalWindow overlay">
      <div className="modalWindow--wrap">
        <h2 className="modalWindow__title">Deseja excluir esse item?</h2>
        <p className="modalWindow__taskText">{taskText}</p>
        <div className="modalWindow__buttons">
          <button className="modalWindow__buttons--button" onClick={onDelete}>
            Sim
          </button>
          <button className="modalWindow__buttons--button" onClick={onClose}>
            Não
          </button>
        </div>
      </div>
    </div>
  );
};

export default modal;
