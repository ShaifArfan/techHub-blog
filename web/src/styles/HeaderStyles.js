import styled from 'styled-components';

export default styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  padding: 1rem 0;
  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav {
    ul {
      li {
        display: inline-block;
        margin: 0 1rem;
        a {
          color: var(--white-1);
          display: inline-block;
          text-decoration: none;
          font-size: 1.6rem;
        }
      }
    }
  }
  .mobileNav {
    nav {
      z-index: 1002;
      position: fixed;
      top: 0;
      right: 0;
      width: 80%;
      transform: translateX(100%);
      background-color: var(--black-2);
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s ease transform;
      ul {
        width: 90%;
        margin: 0 auto;
        li {
          display: block;
          margin: 0.5rem 0;
          a {
            width: 100%;
            padding: 0.5rem 1rem;
            border-radius: 4px;
          }
          &:hover {
            a {
              background: var(--black-1);
            }
          }
        }
      }
      .mobileMenuCloseBtn {
        color: crimson;
        position: absolute;
        top: 10px;
        right: 10px;
        border-color: crimson;
        &:hover {
          background-color: crimson;
          color: var(--white);
        }
      }
    }
    &.open {
      nav {
        transform: translateX(0);
      }
    }
    .mobileNavBg {
      z-index: 1001;
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      transition: opacity 0.6s linear 0s;
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;
