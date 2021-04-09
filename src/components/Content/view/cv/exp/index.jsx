import React from "react";

// import './index.scss';

const Exp = () => (
  <div className="exp">
    <div className="exp__experience">
      <h3 className="exp__pe-title">Профессиональный опыт</h3>
      <p className="exp__accent-gray" />
      <p className="exp__pe-description">
        Последние 5 лет опыта в разработке сайтов. Работал в 2-х небольших
        аутсорс компаниях, направленных на западный рынок. Занимаюсь ведением
        проектов на фрилансе.
        <br className="profile-description__br profile-description__hr" />
        Wordpress/React/Redux/Node JS
      </p>
    </div>
    <h3 className="exp__pe-title exp__pe-title-1">Профессиональные навыки</h3>
    <p className="exp__accent-gray exp__accent-gray2" />
    <div className="exp__skillset">
      <div className="exp__item-wrap">
        <span className="exp__item">HTML:</span>
        <p className="exp__skill">
          HTML5 Pixel Perfect development, Bootstrap 4
        </p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">CSS:</span>
        <p className="exp__skill">
          Responsive Web Design, Sass, BEM, CSS animation, FlexBox, Grid,
          Cross-Browser compatibility knowledge, Semantic UI Animate.css
        </p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">JavaScript:</span>
        <p className="exp__skill">JS native, React, Redux, Node JS</p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap exp__item-wrap6">
        <span className="exp__item">
          PSD to
          <br /> HTML:
        </span>
        <p className="exp__skill">Photoshop, Figma</p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap exp__item-wrap7">
        <span className="exp__item">
          Version
          <br /> control:
        </span>
        <p className="exp__skill">Git Version Control Tool</p>
        <hr className="exp__hr" />
      </div>
      <div className="exp__item-wrap">
        <span className="exp__item">CMS:</span>
        <p className="exp__skill">WordPress</p>
        <hr className="exp__hr" />
      </div>
    </div>
  </div>
);

export default Exp;
