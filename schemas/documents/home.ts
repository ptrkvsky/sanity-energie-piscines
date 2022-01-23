import { AiOutlineHome as icon } from "react-icons/ai";

export default {
  name: "home",
  title: "Accueil",
  description: "Page d'accueil du site",
  type: "document",
  icon,
  __experimental_actions: ["update", /*"create", "delete",*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Image principale",
      type: "mainImage",
      description: `Image banniere`,
    },
    {
      name: "sectionServices",
      title: "Section Services",
      description: `Liens vers les différents services`,
      type: "array",
      of: [
        {
          name: "page",
          type: "reference",
          to: [{ type: "page" }],
          title: "Service",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",

      media: "mainImage",
    },
    prepare(selection) {
      const { title } = selection;
      return Object.assign({}, selection, {
        subtitle: title && `${title}`,
      });
    },
  },
};
