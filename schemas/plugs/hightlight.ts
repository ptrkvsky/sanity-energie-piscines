export default {
  type: "object",
  name: "highlight",
  title: "Mise en avant",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Contenu",
      name: "content",
      type: "portableText",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: "Mise en avant",
        subtitle: title,
      };
    },
  },
};
