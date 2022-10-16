import "./Summary.scss";
import Cards from "../../components/Cards/Cards";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function Summary() {
  return (
    <>
      <div className="summary">
        <div className="summary__container">
          <div className="summary__title">Patient: Lydia</div>
        </div>

          <Tabs className="summary__buttons">
            <TabList>
              <Tab className="summary__button-active">Regular Visit</Tab>
              <Tab className="summary__button"> Focused Visit</Tab>
              <Tab className="summary__button">Vaccination</Tab>
            </TabList>
          </Tabs>

        <Cards />
      </div>
    </>
  );
}

export default Summary;
