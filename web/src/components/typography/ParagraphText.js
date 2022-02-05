import React from 'react';
import { ParagraphTextStyles } from '../../styles/typography/ParagraphTextStyles';

function ParagraphText({ children, ...rest }) {
  return <ParagraphTextStyles {...rest}>{children}</ParagraphTextStyles>;
}

export default ParagraphText;
