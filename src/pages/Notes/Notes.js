import "./Notes.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Notes() {
  const [tsData, settsData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((res) => {
        settsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // text highlight function
  function Highlight({ children: text = "", tags = [] }) {
    if (!tags?.length) return text;
    const matches = [...text.matchAll(new RegExp(tags.join("|"), "ig"))]; // ig = insensitive(case) + global(duplicate) flag
    const startText = text.slice(0, matches[0]?.index);
    return (
      <span>
        {startText}
        {matches.map((match, i) => {
          const startIndex = match.index;
          const currentText = match[0];
          const endIndex = startIndex + currentText.length;
          const nextIndex = matches[i + 1]?.index;
          const untilNextText = text.slice(endIndex, nextIndex);
          return (
            <span key={i}>
              <mark>{currentText}</mark>
              {untilNextText}
            </span>
          );
        })}
      </span>
    );
  }

  // {
  //   tsData
  //     .filter((data) => data.id == patientId)
  //     .map((data) => {
  let highlightedWords = [];
  if (tsData) {
    console.log(tsData);
    tsData.data.auto_highlights_result.results.map((highlight) => {
      if (highlightedWords.length < 10) {
        highlightedWords.push(highlight.text);
        console.log(highlight.text);
      }
    });
    console.log(highlightedWords);
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
                  <Highlight tags={highlightedWords}>
                    {tsData.data.text}
                  </Highlight>
                  <p></p>
                </div>
                <div className="notes__categories">
                  <div className="notes__keywords">Keywords</div>
                  <div className="keywords">
                    {highlightedWords.map((word) => {
                      return <div className="keywords__block">{word}</div>;
                    })}
                  </div>
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
  }
  //     });
  // }
}
export default Notes;
