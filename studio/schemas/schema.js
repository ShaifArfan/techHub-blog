/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
/* eslint-enable */

// import document schemas
import blog from './documents/blog';
import category from './documents/category';
import author from './documents/author';
import featured from './documents/featured';

// import object
import bodyPortableText from './objects/bodyText';
import excerptText from './objects/excerptText';
import customImage from './objects/customImage';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // document schemas
    blog,
    category,
    author,
    featured,

    // object schemas
    bodyPortableText,
    excerptText,
    customImage,
  ]),
});
