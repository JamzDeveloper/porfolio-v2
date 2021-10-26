import React, { MouseEvent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./Modal.css";
type Props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  nameClass?: string;
};
const modalRoot = document.querySelector("#windows--modal") as HTMLElement;
const Modal = (props: Props): JSX.Element => {
  const handleModalContainerClick = (e: MouseEvent) => e.stopPropagation();
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const current = el.current;

    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, []);

  return createPortal(
    <article
      className={`modal ${props.showModal && "is-open"} `}
      onClick={() => props.setShowModal(!props.showModal)}
    >
      <div className={`modal-container ${props.nameClass}`} onClick={handleModalContainerClick}>
        <button
          className="modal-close"
          onClick={() => props.setShowModal(!props.showModal)}
        >
          X
        </button>
        {props.children}
      </div>
    </article>,
    el.current
  );
};

export default Modal;
