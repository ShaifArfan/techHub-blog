import { PortableText } from '@portabletext/react';
import React from 'react';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
  },
};

function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}

export default MyPortableText;
