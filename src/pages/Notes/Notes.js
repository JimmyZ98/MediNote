import "./Notes.scss";

function Notes() {
  return (
    <>
      <div className="notes">
        <div className="notes__header">
          <img
            className="notes__logo"
            src={require("../../assets/Images/Logo.png")}
          />
          <button className="notes__record-button">
            {" "}
            Record new Patient Note
          </button>
        </div>
        <div className="notes__container">
          <div className="notes__patient">
            <div className="notes__patient-info">
              <div className="notes__patient-infotop">
                <div className="notes__patient-name">
                  Patient Name: Lydia Shan
                </div>
                <div className="notes__patient-date">Oct. 15, 2022</div>
              </div>
              <div className="notes__patient-infobottom">
                <div className="notes__patient-type">
                  Type of Appointment: General Visit
                </div>
                <div className="notes__patient-purpose">
                  Purpose of Visit: Abdominal Pain{" "}
                </div>
              </div>
            </div>
            <div className="notes__patients-notes">
                <h2>Doctor's Note</h2>
                <p></p>
                <div className="notes__categories">
                    <div className="notes__symptoms"></div>
                    <div className="notes__prescription"></div>
                    <div className="notes__keywords"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
