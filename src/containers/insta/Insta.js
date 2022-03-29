import React, {useContext} from "react";
import "./Insta.scss";
import {instaSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Insta() {
  const {isDark} = useContext(StyleContext);

  if (!instaSection)
    console.error("insta object for insta section is missing");

  if (!instaSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="insta-header">
          <h1 className="insta-header-title">{instaSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode insta-header-subtitle"
                : "subTitle insta-header-subtitle"
            }
          >
            {instaSection.subtitle}
          </p>
        </div>
        <div className="insta-main-div">
          {instaSection.insta.map((insta, i) => {
            if (!insta) {
              console.log(
                `Insta link for ${insta.title} is missing`
              );
            }
            return (
              <img src="" alt="" />
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
