import styled from 'styled-components';

export default styled.header`
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 1rem 0;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(100px) brightness(80%);
  }
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
          text-decoration: none;
          font-size: 1.6rem;
        }
      }
    }
  }
  .mobileNav {
    nav {
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
        li {
          display: block;
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
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      z-index: -1;
      transition: opacity 0.6s linear 0s;
      filter: brightness(80%) blur(100px);
    }
  }
`;
