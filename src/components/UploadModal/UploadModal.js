import "./UploadModal.scss";
import axios from "axios";
import { useState } from "react";
import closeIcon from "../../assets/Images/close-24px.svg";

function UploadModal({ openModal, closeModal, upload }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [audio, setAudio] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handleType(event) {
    setType(event.target.value);
  }

  if (!openModal) return null;
  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      name: name,
      type: type,
      audio: audio,
    };
    axios
      .post("", newNote)
      .then((response) => {
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="modal__overlay-style"> </div>
      <section className="modal">
        <form>
          <div className="modal__form-top">
            <div className="modal__title"> New Recording</div>
            <img
              className="modal__close"
              src={closeIcon}
              alt="close"
              onClick={closeModal}
            />
          </div>
          <div className="modal__fields">
            <div className="modal__date"> Oct. 15, 2022</div>
            <label className="modal__box-description">Patient Name</label>
            <input
              className="modal__box"
              type="text"
              value={name}
              onChange={handleName}
              placeholder="Patient Name"
            />
            <label className="modal__box-description">Appointment Type</label>
            <input
              className="modal__box"
              type="text"
              value={type}
              onChange={handleType}
              placeholder="Enter Appointment Type"
            />
            <label className="modal__box-description">Audio File</label>
            <input
              className="modal__box"
              type="audio"
              value={audio}
              placeholder="Upload video"
            />

            <button
              className="modal__button-upload"
              onClick={() => handleSubmit(upload)}
            >
              Upload Recording
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default UploadModal;
