export default {
  type: "object",
  name: "bodySection",
  title: "Body Section",
  fields: [
    {
      title: "Titre de la section",
      name: "title",
      type: "string",
    },
    {
      title: "Texte général",
      name: "bodyTextt",
      type: "portableText",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: "Body section",
        subtitle: title,
      };
    },
  },
};
