import React from 'react';
import { ButtonStyles } from '../../styles/buttons/ButtonStyles';

function PrimaryButton({ children, tag, ...props }) {
  return (
    <ButtonStyles as={tag} {...props}>
      {children}
    </ButtonStyles>
  );
}

export default PrimaryButton;
