import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import DeleteConfirmation from "./DeleteConfirmation";

const Modal = forwardRef(function Modal({ onDeletePlace }, ref) {
  const dialog = useRef();

  // Expose both open() and close() to control the modal from outside
  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
    close: () => {
      dialog.current.close();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className="bg-white rounded-lg p-4 shadow-lg">
      {/* Pass both delete handler and close method */}
      <DeleteConfirmation
        onDelete={onDeletePlace}
        onCancel={() => dialog.current.close()}
      />
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
