import "./Header.scss";
import UploadModal from "../UploadModal/UploadModal";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [upload, setUpload] = useState({});

  const handleUpload = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setUpload(event);
  };
  return (
    <div className="header">
      <img
        className="header__logo"
        src={require("../../assets/Images/Logo.png")}
      />
      <button className="header__record-button" onClick={handleUpload}>
        Record New Note
      </button>
      <UploadModal
        openModal={isOpen}
        closeModal={() => setIsOpen(false)}
        upload={upload}
      />
    </div>
  );
}

export default Header;
