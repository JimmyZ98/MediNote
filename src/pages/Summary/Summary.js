import "./Summary.scss";
import Cards from "../../components/Cards/Cards"

function Summary() {
  return (
    <>
      <div className="summary">
        <div className="summary__container">
          <div className="summary__title">Patient roster</div>
        </div>
        <Cards/>
      </div>
    </>
  );
}

export default Summary;
