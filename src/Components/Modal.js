import "../Styles/Modal.css";

function Modal({ setOpenModal ,children}) {
    return (
      <div className="modal-overlay">
        <div className="modal-contenedor">
          {children}
          <button 
              onClick={() => {
                setOpenModal(false);
              }}
            >Close</button>
  
          </div>
        </div>
    );
  }
  
  export default Modal;
    