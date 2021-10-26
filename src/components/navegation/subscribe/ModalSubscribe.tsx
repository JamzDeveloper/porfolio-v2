import React, { useState } from "react";
import Modal from "../../modals/subscribe/Modal";
import "./ModalSubscribe.css";
import EmailSubscribe from "../../../assets/animations/components/EmailSubscribe";
import rowRight from "../../../assets/svg/rowRight.svg";
import Party from "../../../assets/animations/components/Party";
type ModalSubscribeProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const ModalSubscribe = (props: ModalSubscribeProps) => {
  const [animationParty, setAnimationParty] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const onclick = () => {
    console.log("click", animationParty);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAnimationParty(true);
    setEmail("");
  };
  return (
    <Modal
      nameClass="subscribe--modal"
      showModal={props.showModal}
      setShowModal={props.setShowModal}
    >
      <div className="modal--conatiner--image">
        <EmailSubscribe />
      </div>
      <div className="modal--container-context">
        <h3>¡Suscribete!</h3>
        <p>
          Podrás ser uno de los primeros en recibir novedades y promociones.
        </p>
        <form className="modal--form--subscribe" onSubmit={handleSubmit}>
          <input
            value={email}
            name="email"
            type="email"
            placeholder="Correo"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            type="submit"
            className="modal--from--subscribe-subtmit"
            id="submit"
            onClick={onclick}
          >
            {" "}
            <img src={rowRight} alt="rowRight" />
          </button>
        </form>
        <Party isPlaying={animationParty} setIsPlaying={setAnimationParty} />
      </div>
    </Modal>
  );
};

export default ModalSubscribe;
