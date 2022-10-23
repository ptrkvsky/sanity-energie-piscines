import { HiOutlineDocumentText as icon } from 'react-icons/hi';

export default {
  name: 'page',
  title: 'Pages de contenu',
  type: 'document',
  icon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seoDescription',
      title: 'SEO description',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'questionsAnswers',
      type: 'array',
      title: 'Questions and answers',
      of: [{ type: 'questionsAnswers' }],
      group: 'seo',
    },
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Image principale',
      type: 'mainImage',
      description: `Image banniere`,
      group: 'content',
    },
    {
      name: 'vignette',
      title: 'Vignette',
      type: 'mainImage',
      description: `Image affichée sur la page d'accueil.`,
      group: 'content',
    },
    {
      name: 'resume',
      title: 'Résumé',
      type: 'portableText',
      description: `Résumé pour les listes sur la page d'accueil.`,
      group: 'content',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Sections de la page',
      description: 'Ajouter, modifier, et réorganiser les sections.',
      of: [
        { type: 'hero' },
        { type: 'illustration' },
        { type: 'highlight' },
        { type: 'bodySection' },
        { type: 'imageAndText' },
        { type: 'contactEntretien' },
        // { type: 'contactEntretien' },
      ],
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'titleAvis',
      title: 'Titre section avis',
      type: 'string',
      group: 'content',
    },
    {
      name: 'avisSection',
      type: 'array',
      title: 'Avis',
      of: [{ type: 'reference', to: { type: 'avis' } }],
      group: 'content',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'vignette',
    },
    prepare(selection) {
      const { title } = selection;
      return Object.assign({}, selection, {
        subtitle: title && `${title}`,
      });
    },
  },
};
