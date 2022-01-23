export default {
  type: "object",
  name: "hero",
  title: "Hero",
  description: "Image et texte, bloc de texte droite et image à gauche",
  fields: [
    {
      name: "bref",
      title: "Text bref",
      type: "portableText",
    },
    {
      name: "illustration",
      type: "illustration",
    },
    {
      title: "Fond de couleur",
      name: "padding",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "label",
      disabled: "disabled",
    },
    prepare({ title, disabled }) {
      return {
        title: `Hero ${disabled ? " - désactivé" : ""}`,
      };
    },
  },
};
