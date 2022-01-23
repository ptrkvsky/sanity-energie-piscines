export default {
  name: "portableText",
  type: "array",
  title: "Content",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
      ],
      marks: {
        decorators: [
          { title: "Gras", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Italic", value: "italic" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "External link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
              {
                title: "Ouvrir dans un nouvel onglet",
                name: "blank",

                type: "boolean",
              },
              {
                title: "Nofollow",
                name: "nofollow",

                type: "boolean",
              },
              {
                title: "Sponsored",
                name: "sponsored",

                type: "boolean",
              },
              {
                title: "User generated content",
                name: "ugc",
                type: "boolean",
              },
              {
                title: "Cloaked",
                name: "cloaked",
                type: "boolean",
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [{ type: "page" }],
              },
              {
                name: "obfuscation",
                title: "obfuscation",
                type: "boolean",
              },
            ],
          },
        ],
      },
    },
    {
      type: "mainImage",
      options: { hotspot: true },
    },
  ],
};
