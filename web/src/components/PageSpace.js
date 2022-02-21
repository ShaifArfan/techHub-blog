import React from 'react';
import { PageSpaceStyles } from '../styles/PageSpaceStyles';

function PageSpace({ top, bottom, children }) {
  return (
    <PageSpaceStyles top={top} bottom={bottom}>
      {children}
    </PageSpaceStyles>
  );
}

export default PageSpace;
