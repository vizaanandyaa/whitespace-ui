import React from "react";
import { useState } from "react";
import removeCircle from "../assets/faq/remove-circle.png";
import addCircle from "../assets/faq/add-circle.png";

function Accordion(props) {
  const [isActive, setIsActive] = useState(false);
  const open = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="accordion">
        <button className="question" onClick={open}>
          <p className="question-text">{props.quest}</p>
          <span className="question-img">
            <img src={isActive ? removeCircle : addCircle} />
          </span>
        </button>
        <div className="answer">
          {isActive ?
            <p className="answer-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p> : null
          }
        </div>
      </div>
    </>
  );
}

export default Accordion;
