export default {
  type: "object",
  name: "imageAndText",
  title: "Image et texte",
  icon: () => `🖼️`,
  fields: [
    {
      type: "string",
      name: "label",
      title: "Label",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "portableText",
      name: "text",
      title: "Texte",
      description: "Texte principale",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "imagePosition",
      title: "Position de l'image",
      description: "Positionner l'image à gauche ou à droite",
      options: {
        list: [
          { title: "Gauche", value: "left" },
          { title: "Droite", value: "right" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Image",
      type: "mainImage",
      description: `Image`,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      label: "label",
    },
    prepare({ label }) {
      return {
        title: `Image et texte`,
        subtitle: `${label}`,
      };
    },
  },
};
