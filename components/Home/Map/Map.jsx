import React from "react";

import { BiBraille } from "react-icons/bi";

const data = [
  "AI Researcher",
  "Deep Learning Researcher",
  "NLP Applied Scientist",
  "Data Scientist",
  "Project Manager",
  "Speech Recognition Engineer",
  "Machine Learning Engineer",
];

const rightData = [
  "Visionaries",
  "Software Engineer",
  "Dev Ops Engineer",
  "Full Stack Engineer",
  "Creative Designer",
  "User Experience Engineer",
  "Product Manager",
];

export default function TheMap() {
  return (
    <div className="map-container">
      <div className="imgwrapper">
        <img src="images/MapChart_Map.png" alt="Map" />
      </div>
      <div className="content">
        <h2>A Group of Talented People</h2>
        <p>
          We’re fostering a collaborative eco-system to solve real life problems
          and so on.
        </p>

        <div className="talentedPeople">
          <ul>
            {data.map((item) => (
              <li key={item}>
                <BiBraille /> {item}
              </li>
            ))}
          </ul>

          <ul>
            {rightData.map((item) => (
              <li key={item}>
                <BiBraille /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
