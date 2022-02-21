import { PortableText } from '@portabletext/react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
  },
  marks: {
    code: ({ children }) => (
      <SyntaxHighlighter style={theme}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter style={theme} language={value.code.language}>
        {String(value.code.code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ),
  },
};

function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}

export default MyPortableText;
