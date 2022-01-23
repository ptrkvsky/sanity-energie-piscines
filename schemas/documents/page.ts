import { HiOutlineDocumentText as icon } from "react-icons/hi";

export default {
  name: "page",
  title: "Pages de contenu",
  type: "document",
  icon,
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
      name: "vignette",
      title: "Vignette",
      type: "mainImage",
      description: `Image affichée sur la page d'accueil.`,
    },
    {
      name: "resume",
      title: "Résumé",
      type: "portableText",
      description: `Résumé pour les listes sur la page d'accueil.`,
    },
    {
      name: "content",
      type: "array",
      title: "Sections de la page",
      description: "Ajouter, modifier, et réorganiser les sections.",
      of: [
        { type: "hero" },
        { type: "illustration" },
        { type: "highlight" },
        { type: "bodySection" },
      ],
      validation: (Rule) => Rule.required(),
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
