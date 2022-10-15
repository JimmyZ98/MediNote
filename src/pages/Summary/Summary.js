import "./Summary.scss";


function Summary() {
    return (
      <>

      <div className="summary__header">
    <img className="summary__logo" src={require("../../assets/Images/Logo.png")}/>
    <button className="summary__record-button"> Record new Patient Note</button>
    </div>
    <div className="summary__container">
        <div className> </div>
    </div>
      </>
    );
  }
  
  export default Summary;
  