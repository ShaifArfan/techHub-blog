import styled from 'styled-components';

export const SearchModalStyles = styled.div`
  position: fixed;
  z-index: 2000;
  min-height: 100vh;
  width: 100%;
  background-color: #000000bd;
  .modal__container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 100px;
    max-height: calc(100% - 150px);
    width: 90%;
    max-width: 500px;
    background-color: var(--black-1);
    padding: 2rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .close {
      position: absolute;
      transform: translateY(-100%);
      top: -10px;
      right: 0;
      border-color: crimson;
      color: crimson;
      &:hover {
        background-color: crimson;
        color: var(--white);
      }
    }
    .search__result {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;

      overflow-y: auto;
    }
  }
  @media only screen and (max-width: 768px) {
    .modal__container {
      padding: 1rem;
    }
  }
`;
