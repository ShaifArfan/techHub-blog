import React from 'react';
import { PageHeaderStyles } from '../styles/PageHeaderStyles';
import ParagraphText from './typography/ParagraphText';
import { SectionTitle } from './typography/Title';

function PageHeader({ title, description }) {
  return (
    <div className="container">
      <PageHeaderStyles>
        <SectionTitle>{title}</SectionTitle>
        <ParagraphText>{description}</ParagraphText>
      </PageHeaderStyles>
    </div>
  );
}

export default PageHeader;
