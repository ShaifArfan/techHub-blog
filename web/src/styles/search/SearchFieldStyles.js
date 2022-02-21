import styled from 'styled-components';

export const SearchFieldStyles = styled.label`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    /* max-width: 500px; */
    font-size: 1.8rem;
    padding: 1rem;
    border-radius: 4px;
    color: var(--darkBlue);
    font-family: Poppins;
    border: none;
    outline: none;
    &:focus {
      outline: 3px solid var(--secondary);
    }
  }
  .searchIcon {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--primary);
  }
`;
