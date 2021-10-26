import { useState } from "react";
import ModalSubscribre from "./ModalSubscribe";
import "./Subscribe.css";
const Subscribe = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="subscribe--container">
      <button
        className="subscribe--container-button"
        onClick={() => setShowModal(!showModal)}
      >
        Suscribirme
      </button>
      {showModal && (
        <ModalSubscribre showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
};
export default Subscribe;
