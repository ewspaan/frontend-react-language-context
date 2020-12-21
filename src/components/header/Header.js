import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import { ReactComponent as FlagNL } from '../../assets/netherlands.svg';
import { ReactComponent as FlagES } from '../../assets/spain.svg';
import './Header.css';
import {LanguageContext} from "../../context/LanguageContextProvider";

const content = {
  nl: {
    menuItems: {
      home: 'Home',
      aboutUs: 'Over ons',
      allPlants: 'Alle planten',
      experience: 'Persoonlijke ervaringen'
    },
    changeTo: 'Cambiar el idioma a',
    title: 'Planten voor iedereen!'
  },
  es: {
    menuItems: {
      home: 'Casa',
      aboutUs: 'Sobre nosotros',
      allPlants: 'todas las plantas',
      experience: 'Experiencias personales'
    },
    changeTo: 'Wissel taal naar',
    title: 'Plantas para todos!'
  }
}

function Header() {
  const {toggleLanguage, language} = useContext(LanguageContext)
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                {content[language].menuItems.home}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about-us">
                {content[language].menuItems.aboutUs}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/all-plants">
                {content[language].menuItems.allPlants}
              </NavLink>
              </li>
            <li className="language-switch">
              <p>{content[language].changeTo}</p>
              {language === "nl" && <FlagES onClick={toggleLanguage} />}
              {language === "es" && <FlagNL onClick={toggleLanguage} />}
            </li>
          </ul>
        </nav>
        <div className="image-container">
          <img src={headerImage} alt="Header plantsimage" className="header-image" />
          <h1>{content[language].title}</h1>
        </div>

      </header>
    </>
  );
}

export default Header;
