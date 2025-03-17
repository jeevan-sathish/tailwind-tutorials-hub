
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is Tailwind CSS primarily known for?",
    options: [
      "Component-based architecture",
      "Utility-first approach",
      "JavaScript integration",
      "Server-side rendering"
    ],
    correctAnswer: 1,
    explanation: "Tailwind CSS is primarily known for its utility-first approach, where you apply pre-existing utility classes directly to HTML elements rather than writing custom CSS."
  },
  {
    id: 2,
    question: "Which of the following is the correct way to center an element horizontally in Tailwind CSS?",
    options: [
      "horizontal-center",
      "justify-center",
      "flex justify-center",
      "mx-auto"
    ],
    correctAnswer: 3,
    explanation: "mx-auto applies margin-left: auto; margin-right: auto; which centers block elements horizontally."
  },
  {
    id: 3,
    question: "How would you make text color red in Tailwind CSS?",
    options: [
      "color-red",
      "text-color-red",
      "text-red-500",
      "font-red"
    ],
    correctAnswer: 2,
    explanation: "In Tailwind, text colors are controlled with text-{color}-{shade} utilities. text-red-500 applies a medium shade of red."
  },
  {
    id: 4,
    question: "Which prefix is used for small screen responsive breakpoints in Tailwind?",
    options: [
      "mobile:",
      "sm:",
      "small:",
      "s:"
    ],
    correctAnswer: 1,
    explanation: "Tailwind uses sm: as the prefix for the small screen breakpoint (typically 640px and above)."
  },
  {
    id: 5,
    question: "How do you apply a hover effect in Tailwind CSS?",
    options: [
      "hover:class",
      "on-hover:class",
      "class:hover",
      "@hover { class }"
    ],
    correctAnswer: 0,
    explanation: "Tailwind uses the hover: prefix to apply styles when an element is hovered, e.g., hover:bg-blue-700."
  },
  {
    id: 6,
    question: "Which Tailwind class would you use to create a 2-column grid?",
    options: [
      "columns-2",
      "grid-2",
      "grid-cols-2",
      "col-span-2"
    ],
    correctAnswer: 2,
    explanation: "grid-cols-2 creates a grid with 2 equal-width columns."
  },
  {
    id: 7,
    question: "How would you add a shadow to an element in Tailwind CSS?",
    options: [
      "box-shadow",
      "shadow",
      "drop-shadow",
      "elevation"
    ],
    correctAnswer: 1,
    explanation: "The shadow class adds a basic box shadow to an element. You can use variants like shadow-sm, shadow-md, shadow-lg for different sizes."
  },
  {
    id: 8,
    question: "Which of the following is NOT a valid Tailwind CSS padding class?",
    options: [
      "p-4",
      "pt-2",
      "px-3",
      "p-vertical-4"
    ],
    correctAnswer: 3,
    explanation: "p-vertical-4 is not valid. For vertical padding, you would use py-4 (padding top and bottom)."
  },
  {
    id: 9,
    question: "What does the 'flex' class do in Tailwind CSS?",
    options: [
      "Makes the element flexible in size",
      "Applies display: flex to the element",
      "Centers the element in its container",
      "Makes the element's children flexible"
    ],
    correctAnswer: 1,
    explanation: "The flex class applies display: flex to the element, making it a flex container."
  },
  {
    id: 10,
    question: "Which Tailwind directive is used to inject Tailwind's base styles?",
    options: [
      "@tailwind utilities",
      "@tailwind base",
      "@tailwind components",
      "@tailwind core"
    ],
    correctAnswer: 1,
    explanation: "@tailwind base injects Tailwind's base styles, which are the foundation on which all other utilities are built."
  }
];
