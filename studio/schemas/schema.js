/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import document schemas
import blog from './documents/blog';
import category from './documents/category';
import author from './documents/author';
import featured from './documents/featured';

// import object
import richText from './objects/richText';
import normalText from './objects/normalText';
import customImage from './objects/customImage';
import customCode from './objects/customCode';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // document schemas
    blog,
    category,
    author,
    featured,

    // object schemas
    normalText,
    richText,
    customImage,
    customCode,
  ]),
});
