import "./Notes.scss";


function Notes() {
  return (
    <>
      <div className="notes">
        <div className="notes__container">
          <div className="notes__patient">
            <div className="notes__patient-info">
              <div className="notes__patient-infotop">
                <div className="notes__patient-name">
                  Patient Name: Lydia Shan
                </div>
                <div className="notes__patient-date">Oct. 15, 2022</div>

function Notes({ tsData, patientId }) {
  console.log(tsData)
  console.log(patientId)
  {
    tsData
      .filter((data) => data.id == patientId)
      .map((data) => {
        return (
          <>
            <div className="notes"> 
              <div className="notes__header">
                <img
                  className="notes__logo"
                  src={require("../../assets/Images/Logo.png")}
                />
                <button className="notes__record-button">
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
                        Purpose of Visit: Abdominal Pain
                      </div>
                    </div>
                  </div>
                  <div className="notes__bottom">
                    <div className="notes__patient-notes">
                      <h2 className="notes__patient-heading">Doctor's Note</h2>
                      <p>${data.text}</p>
                    </div>
                    <div className="notes__categories">
                      <div className="notes__keywords">Keywords</div>
                    </div>
                  </div>
                </div>
                <div className="notes__buttons">
                  <button className="notes__buttons-delete">Delete</button>
                  <div className="notes__buttons-container">
                    <button className="notes__buttons-record">
                      Record Again
                    </button>
                    <button className="notes__buttons-edit">Edit Note</button>
                    <button className="notes__buttons-share">Share Note</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="notes__bottom">
              <div className="notes__patient-notes">
                <h2 className="notes__patient-heading">Doctor's Note</h2>
                <p></p>
              </div>
              <div className="notes__categories">
                <div className="notes__keywords">Keywords</div>
                <div className="notes__keywords">Medical Condition</div>
              </div>
            </div>
          </div>
          <div className="notes__buttons">
            <button className="notes__buttons-delete">Delete</button>
            <div className="notes__buttons-container">
              <button className="notes__buttons-record">Record Again</button>
              <button className="notes__buttons-edit">Edit Note</button>
              <button className="notes__buttons-share">Share Note</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

          </>
        );
      });
  }

}
export default Notes;
