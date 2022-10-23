import { MdRateReview as icon } from 'react-icons/md';

export default {
  name: 'avis',
  title: 'Avis',
  description: 'Avis des clients',
  type: 'document',
  icon,
  fields: [
    {
      name: 'note',
      title: 'Note',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'nom',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pointFort',
      title: 'Points forts',
      type: 'string',

      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      nom: 'nom',
    },
    prepare(selection) {
      const { nom } = selection;
      return Object.assign({}, selection, {
        title: nom && `${nom}`,
      });
    },
  },
};
