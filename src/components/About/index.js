import React from "react";
import coverImage from "../../assets/cover/cover-image.png";
import coverImage222 from "../../assets/cover/cover-image222.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>

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
            <a href="https://issuu.com/cpiccolombo/docs/the_journey_of_the_holy_tree-_cultural_interface_b/77">
              The Journey of Holy Tree
            </a>
          </li>
          <li>
            <a href="https://atbu.org/node/69">IATBU</a>
          </li>
          <li>
            {" "}
            <a href="https://hcicolombo.gov.in/pdf/INTERNATINAL_BUDDHIST_CONFERENCE_2011_PUBLICATION.pdf">
              IBC
            </a>
          </li>
          <li>
            <a href="https://shodhganga.inflibnet.ac.in/handle/10603/142686">
              Arts
            </a>
          </li>
          <li>
            <a href="https://herald.uohyd.ac.in/">Humanity</a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Sitagu_International_Buddhist_Academy">
              Academy
            </a>
          </li>
        </ul>
        <img
          src={coverImage}
          className="my-2"
          style={{ width: "40%" }}
          alt="cover"
        />{" "}
        &nbsp; &nbsp;
        <img
          src={coverImage222}
          className="my-2"
          style={{ width: "54%" }}
          alt="cover"
        />
      </div>
    </section>
  );
}

export default About;
