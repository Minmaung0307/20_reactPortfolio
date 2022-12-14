import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import resumepdf from "../../assets/resume/resume.pdf";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header>
      <nav className="flex-row px-1 nav-wrapper">
        <a data-testid="link" href="#about">
          <span role="img" aria-label="thanks">
            🙏
          </span>{" "}
          Zaw Min Maung
        </a>

        <ul className="flex-row right hide-on-med-and-down">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            ></a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

          <li className="resume">
            <a href={resumepdf} download>
              Resume
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
