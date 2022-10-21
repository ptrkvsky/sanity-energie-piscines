export default {
  type: 'object',
  name: 'questionsAnswers',
  title: 'Questions / Answers',
  description: 'Questions and answers for graph content',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'text',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
    },
  ],
  preview: {
    select: {
      question: 'question',
    },
    prepare({ question }) {
      return {
        title: `${question} `,
      };
    },
  },
};
