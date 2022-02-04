import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { MdClose, MdMenu } from 'react-icons/md';
import HeaderStyles from '../styles/HeaderStyles';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  console.log('test');

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
  }, []);

  return (
    <HeaderStyles>
      <div className="bg" />
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div
            className={clsx(
              'nav__wrapper',
              isMobile && 'mobileNav',
              isNavOpen && 'open'
            )}
          >
            {isMobile && (
              <>
                <ActionButton
                  // className="mobileMenuBtn"
                  onKeyDown={() => setIsNavOpen(!isNavOpen)}
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  <MdMenu />
                </ActionButton>
                <div className="mobileNavBg" />
              </>
            )}

            <nav>
              {isMobile && (
                <ActionButton
                  className="mobileMenuCloseBtn"
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  onKeyDown={() => setIsNavOpen}
                >
                  <MdClose />
                </ActionButton>
              )}
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
