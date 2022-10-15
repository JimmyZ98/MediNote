import "./Cards.scss";

function Cards() {
  return (
    <>
      <div className="cards">
        <div className="cards__patient">
          <div className="cards__patient-infotop">
            <div className="cards__patient-name">Patient Name: Lydia Shan</div>
            <div className="cards__patient-date">Last visit: Oct. 15, 2022</div>
          </div>
          <div className="cards__patient-infobottom">
            <div className="cards__patient-registration">
              Registered October 15, 1988
            </div>
            <div className ="cards__patient-visits">127 Notes to date</div>
            <p>key words</p>
          </div>
          <div className="cards__buttons">
            <button className="cards__buttons-view">
              View Patient Information
            </button>
            <button className="cards__buttons-record">Record New Note</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
