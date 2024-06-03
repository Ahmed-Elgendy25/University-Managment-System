import { QuestionTyped } from './type';

const sampleQuestions: QuestionTyped[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the capital of France?',
    imageLink: null,
    options: {
      values: [
        { id: 'A', text: 'London', isCorrect: false },
        { id: 'B', text: 'Paris', isCorrect: true },
        { id: 'C', text: 'Berlin', isCorrect: false },
        { id: 'D', text: 'Rome', isCorrect: false },
      ],
    },
  },
  {
    id: 2,
    type: 'true-false',
    question: 'Mount Everest is the tallest mountain in the world.',
    imageLink:
      'https://th.bing.com/th/id/R.ccfdd13ff6fe31f69f96d35ce6f8faee?rik=%2fESqZYl5mBay0Q&pid=ImgRaw&r=0',
    options: {
      values: [
        { id: 'A', text: 'True', isCorrect: true },
        { id: 'B', text: 'False', isCorrect: false },
      ],
    },
  },
  {
    id: 3,
    type: 'optional-choice',
    question: 'Which of the following are colors of the rainbow?',
    options: {
      values: [
        { id: 'A', text: 'Red', isCorrect: true },
        { id: 'B', text: 'White', isCorrect: false },
        { id: 'C', text: 'Black', isCorrect: false },
        { id: 'D', text: 'Yellow', isCorrect: true },
      ],
    },
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who is known as the father of modern physics?',
    imageLink:
      'https://th.bing.com/th/id/OIP.oR74aFK7hYnqgFQ6UCPE2wHaHm?rs=1&pid=ImgDetMain',
    options: {
      values: [
        { id: 'A', text: 'Isaac Newton', isCorrect: false },
        { id: 'B', text: 'Albert Einstein', isCorrect: true },
        { id: 'C', text: 'Nikola Tesla', isCorrect: false },
        { id: 'D', text: 'Marie Curie', isCorrect: false },
      ],
    },
  },
  {
    id: 5,
    type: 'true-false',
    question: 'The Great Wall of China is visible from space.',
    imageLink:
      'https://th.bing.com/th/id/OIP.XIP8n-FUuutxiV7G3s33xAHaEK?rs=1&pid=ImgDetMain',
    options: {
      values: [
        { id: 'A', text: 'True', isCorrect: true },
        { id: 'B', text: 'False', isCorrect: false },
      ],
    },
  },
  {
    id: 6,
    type: 'optional-choice',
    question: 'Which of the following are primary colors?',
    options: {
      values: [
        { id: 'A', text: 'Green', isCorrect: false },
        { id: 'B', text: 'Red', isCorrect: true },
        { id: 'C', text: 'Purple', isCorrect: false },
        { id: 'D', text: 'Blue', isCorrect: true },
      ],
    },
  },
];

export default sampleQuestions;

// import { QuestionsMcqTyped } from './type';

// export const mcqQuestions: QuestionsMcqTyped[] = [
//   {
//     question: 'What is the largest mammal?',
//     options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
//     answer: 'Blue Whale',
//   },
//   {
//     question: 'Which country is famous for the kangaroo?',
//     options: ['Australia', 'Argentina', 'South Africa', 'Canada'],
//     answer: 'Australia',
//   },
//   {
//     question: 'Who painted the Mona Lisa?',
//     options: [
//       'Pablo Picasso',
//       'Leonardo da Vinci',
//       'Vincent van Gogh',
//       'Michelangelo',
//     ],
//     answer: 'Leonardo da Vinci',
//   },
//   {
//     question: 'What is the powerhouse of the cell?',
//     options: [
//       'Nucleus',
//       'Mitochondria',
//       'Endoplasmic Reticulum',
//       'Golgi Apparatus',
//     ],
//     answer: 'Mitochondria',
//   },
//   {
//     question: 'Which of these is a primary color?',
//     options: ['Green', 'Orange', 'Purple', 'Red'],
//     answer: 'Red',
//   },
// ];
