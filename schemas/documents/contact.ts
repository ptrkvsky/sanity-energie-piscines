import { AiOutlineMail as icon } from "react-icons/ai";

export default {
  name: "contact",
  title: "Contact",
  description: "Demandes de contact",
  type: "document",
  icon,
  fields: [
    {
      name: "nom",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "prenom",
      title: "Prenom",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "telephone",
      title: "Telephone",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      description: "Date de la demande",
      options: {
        dateFormat: "DD-MM-YYYY",
        calendarTodayLabel: "Aujourd'hui",
      },
    },
  ],

  preview: {
    select: {
      nom: "nom",
      prenom: "prenom",
      date: "date",
    },
    prepare(selection) {
      const { nom, prenom, date } = selection;
      return Object.assign({}, selection, {
        title: nom && `${nom} ${prenom}`,
        subtitle: date && `${date}`,
      });
    },
  },
};
