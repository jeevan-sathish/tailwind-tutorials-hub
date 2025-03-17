
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { QuizQuestion } from '../data/quizData';

interface QuizResultsProps {
  questions: QuizQuestion[];
  userAnswers: (number | null)[];
  resetQuiz: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ questions, userAnswers, resetQuiz }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  // Calculate the score
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  ).length;
  const score = (correctAnswers / questions.length) * 100;
  const scoreText = score.toFixed(0);
  
  // Prepare chart data
  const chartData = [
    { name: 'Correct', value: correctAnswers, color: '#10B981' },
    { name: 'Incorrect', value: questions.length - correctAnswers, color: '#EF4444' },
  ];
  
  useEffect(() => {
    // Trigger confetti effect for good scores
    if (score >= 70) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [score]);
  
  // Function to get score message
  const getScoreMessage = () => {
    if (score >= 90) return "Excellent! You're a Tailwind CSS master!";
    if (score >= 70) return "Great job! You have a solid understanding of Tailwind CSS.";
    if (score >= 50) return "Good effort! Keep practicing to improve your Tailwind skills.";
    return "Don't worry! Tailwind CSS takes practice. Keep learning!";
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-scale-in">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Simple confetti effect using pseudo-elements */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  borderRadius: `${Math.random() > 0.5 ? '50%' : '0'}`,
                  opacity: Math.random(),
                  animation: `fall ${Math.random() * 3 + 2}s linear forwards`,
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Quiz Results</h3>
        <p className="text-gray-600 mb-4">{getScoreMessage()}</p>
        
        <div className="relative inline-block">
          <svg className="w-40 h-40" viewBox="0 0 36 36">
            <path
              className="stroke-current text-gray-200"
              fill="none"
              strokeWidth="3"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={`stroke-current ${score >= 70 ? 'text-green-500' : score >= 50 ? 'text-yellow-500' : 'text-red-500'}`}
              fill="none"
              strokeWidth="3"
              strokeDasharray={`${score}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.5" className="fill-current text-3xl font-bold text-gray-700" textAnchor="middle">
              {scoreText}%
            </text>
          </svg>
        </div>
        
        <div className="mt-2 text-lg">
          <span className="font-medium">{correctAnswers}</span> out of{" "}
          <span className="font-medium">{questions.length}</span> questions correct
        </div>
      </div>
      
      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-4">Score Breakdown</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" name="Questions">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mb-6">
        <button
          className="text-blue-600 font-medium flex items-center"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Question Details" : "Show Question Details"}
          <svg
            className={`ml-1 transform transition-transform ${showDetails ? "rotate-180" : ""}`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      
      {showDetails && (
        <div className="space-y-4 mt-4 animate-fade-in">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div
                key={question.id}
                className={`p-4 rounded-lg border ${
                  isCorrect ? "border-green-100 bg-green-50" : "border-red-100 bg-red-50"
                }`}
              >
                <div className="flex justify-between">
                  <h5 className="font-medium text-gray-900">Question {index + 1}</h5>
                  <span
                    className={`text-sm font-medium ${
                      isCorrect ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isCorrect ? "Correct" : "Incorrect"}
                  </span>
                </div>
                <p className="mt-1 text-gray-700">{question.question}</p>
                
                <div className="mt-2 space-y-1">
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`px-3 py-2 rounded-md text-sm ${
                        question.correctAnswer === optionIndex
                          ? "bg-green-100 text-green-800"
                          : userAnswer === optionIndex
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {option}
                      {question.correctAnswer === optionIndex && (
                        <span className="ml-2 text-green-600 font-medium">✓ Correct answer</span>
                      )}
                      {userAnswer === optionIndex && userAnswer !== question.correctAnswer && (
                        <span className="ml-2 text-red-600 font-medium">✗ Your answer</span>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-2 text-sm text-gray-600">
                  <strong>Explanation:</strong> {question.explanation}
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      <div className="mt-8 flex justify-center">
        <button
          onClick={resetQuiz}
          className="px-6 py-3 bg-tailwind-blue text-white font-medium rounded-lg hover:bg-tailwind-blue/90 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResults;
