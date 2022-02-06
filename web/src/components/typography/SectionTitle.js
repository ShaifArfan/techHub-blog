import React from 'react';
import { SectionTitleStyles } from '../../styles/typography/SectionTitleStyles';

function SectionTitle({ children, tag, ...props }) {
  return (
    <SectionTitleStyles as={tag} {...props}>
      {children}
    </SectionTitleStyles>
  );
}

export default SectionTitle;
