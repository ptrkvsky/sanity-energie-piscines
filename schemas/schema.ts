// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
// documents
import home from './documents/home';
import page from './documents/page';
import siteSettings from './documents/siteSettings';
import contact from './documents/contact';
// objects
import blockContent from './objects/blockContent';
import link from './objects/link';
import mainImage from './objects/mainImage';
import portableText from './objects/portableText';
import simpleTitle from './objects/simpleTitle';
import questionsAnswers from './objects/questionsAnswers';

import * as plugs from './plugs';
import plugDefaultFields from './plugs/_plugDefaultField';

const allPlugs = Object.values(plugs).map((plug: any) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) };
});

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      blockContent,
      contact,
      home,
      link,
      mainImage,
      page,
      portableText,
      simpleTitle,
      siteSettings,
      questionsAnswers,
    ])
    .concat(allPlugs),
});
