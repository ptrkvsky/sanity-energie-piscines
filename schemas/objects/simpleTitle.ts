export default {
  title: "Titre simple",
  name: "simpleTitle",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Only allow these block styles
      styles: [
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
      ],
      lists: [],
      marks: {
        // Only allow these decorators
        decorators: [],
        // Support annotating text with a reference to an author
        annotations: [],
      },
    },
  ],
};
