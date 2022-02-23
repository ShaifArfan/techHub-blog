import React from 'react';
import { Link } from 'gatsby';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { SectionTitle } from '../components/typography/Title';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';

function NotFoundPage() {
  return (
    <PageSpace>
      <div className="container">
        <NotFoundPageStyles>
          <SectionTitle className="title">404</SectionTitle>
          <ParagraphText>
            The page you are looking for is not found. <br /> Go Back to{' '}
            <Link to="/" className="link">
              Home Page
            </Link>
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  );
}

export default NotFoundPage;
