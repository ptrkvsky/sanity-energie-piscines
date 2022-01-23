import { BsFillGearFill as icon } from "react-icons/bs";

export default {
  name: "siteSettings",
  type: "document",
  title: "Parametres",
  icon,
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      type: "colorPicker",
      name: "primaryColor",
      title: "Primary brand color",
      description:
        "Used to generate the primary accent color for websites, press materials, etc",
    },
    {
      name: "logo",
      title: "Logo",
      type: "mainImage",
      description: `Logo de l'entreprise`,
    },
  ],
};
