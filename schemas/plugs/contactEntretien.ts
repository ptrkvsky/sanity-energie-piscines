export default {
  type: 'object',
  name: 'contactEntretien',
  title: 'Contact entretien',
  fields: [
    {
      title: 'Titre de la section',
      name: 'title',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      title: 'Image de fond',
      type: 'mainImage',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: 'Contact',
        subtitle: title,
      };
    },
  },
};
