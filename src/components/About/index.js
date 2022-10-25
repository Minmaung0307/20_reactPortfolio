import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Beauty of People</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Padaung (Yan Pa Doung) is a Shan term for the <bold>Kayan Lahwi</bold>
          (the group in which women wear the brass neck rings). The Kayan
          residents in Mae Hong Son Province in Northern Thailand refer to
          themselves as Kayan and object to being called Padaung. <br />
          <br />
          Myanmar: Shan State: 80,000 <br />
          Myanmar: Kayah State: 70,000
          <br />
          Thailand: 600
        </p>
      </div>
    </section>
  );
}

export default About;
