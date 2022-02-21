import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat neque
          commodi perspiciatis quibusdam delectus voluptas ab eos natus laborum!
          Veritatis, facilis modi. Ex, adipisci. Ab, atque. Debitis officia qui
          vero!
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          © TechHub-Blog Creative {new Date().getFullYear()}. All rights
          reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
