import { useState} from "react"
import Modal from "./Modal";

const UseModal = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
  
    return (
      <div>
        <button className={"boton-ng " +
          (props.color === "boton-ng-gris" ? "boton-ng-gris " : "")} onClick={() => setModalOpen(true)}>
          {props.nombreBtn}
        </button>
        {modalOpen && (
          <Modal setOpenModal={setModalOpen}>
            <div>{props.children}</div>
          </Modal>
        )}
      </div>
    );
  };
  
  export default UseModal;
