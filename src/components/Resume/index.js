import React from "react";
import resumepdf from "./src/assets/resume/resume.pdf";

function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">Resume</h1>

      <div className="my-2">
        <p>
          I am Zaw Min Maung, Myanmar, currently studying full-stack web
          developing course. This is very first time and challenging, focusing
          on every concept and running to get done given projects in time. I
          love coding and coding.
        </p>
        <p>I teach the Buddhist Psychology and Philosophy.</p>
        <p>
          I work with United States Institute of Peace (USIP), The Network for
          Religious and Traditional Peacemakers, USIDHR, Myanmar Peace Center
          and NGOs.
        </p>
        <p>I have founded school, college, and retreat center in Myanmar.</p>
        <ul>
          <li>
            <a href={resumepdf} download>
              Click Here
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
