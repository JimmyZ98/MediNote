import "./Cards.scss";
import UploadModal from "../UploadModal/UploadModal";
import { useState } from "react";

function Cards() {
  const [isOpen, setIsOpen] = useState(false);
  const [upload, setUpload] = useState({});

  const handleUpload = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setUpload(event);
  };
  return (
    <>
      <div className="cards">
        <div className="cards__patient">
          <div className="cards__patient-infotop">
            <div className="cards__patient-name">Regular Patient Check-up</div>
            <div className="cards__patient-date">Oct. 15, 2022</div>
          </div>
          <div className="cards__patient-infobottom">
            <div className="cards__patient-registration">
              Registered October 15, 1988
            </div>
            <p>key words</p>
          </div>
          <div className="cards__buttons">
            <button className="cards__buttons-view">
              View Patient Information
            </button>
            <button className="cards__buttons-record" onClick={handleUpload}>
              Record New Note
            </button>
            <UploadModal
              openModal={isOpen}
              closeModal={() => setIsOpen(false)}
              upload={upload}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
