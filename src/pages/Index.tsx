
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DocumentSection from '@/components/DocumentSection';
import TutorialSection from '@/components/TutorialSection';
import Footer from '@/components/Footer';
import { useState } from 'react';
import QuizTimer from '@/components/QuizTimer';
import QuizResults from '@/components/QuizResults';
import { quizQuestions } from '@/data/quizData';

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const handleAnswerSelect = (answer: number) => {
    if (selectedAnswers[currentQuestion] === null) {
      const newAnswers = [...selectedAnswers];
      newAnswers[currentQuestion] = answer;
      setSelectedAnswers(newAnswers);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers(Array(quizQuestions.length).fill(null));
    setShowResults(false);
    setTimeExpired(false);
  };

  const handleTimeExpired = () => {
    setTimeExpired(true);
    setShowResults(true);
  };

  const score = selectedAnswers.filter((answer, index) => 
    answer === quizQuestions[index].correctAnswer
  ).length;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section id="documentation" className="py-16">
          <div className="container mx-auto px-4">
            <DocumentSection />
          </div>
        </section>
        
        <section id="tutorials" className="py-16 bg-gray-50 dark:bg-gray-900 theme-transition">
          <div className="container mx-auto px-4">
            <TutorialSection />
          </div>
        </section>
        
        <section id="quiz" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Test Your Tailwind Knowledge</h2>
            
            {!quizStarted && !showResults && (
              <div className="max-w-2xl mx-auto glass-card p-8 rounded-xl text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to test your Tailwind CSS knowledge?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This quiz has {quizQuestions.length} questions to test your understanding of Tailwind CSS concepts.
                  You'll have 5 minutes to complete all questions.
                </p>
                <button 
                  onClick={handleStartQuiz}
                  className="button-glow bg-tailwind-blue text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300"
                >
                  Start Quiz
                </button>
              </div>
            )}
            
            {quizStarted && !showResults && (
              <div className="max-w-3xl mx-auto glass-card p-8 rounded-xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </div>
                  <QuizTimer 
                    isRunning={quizStarted && !showResults}
                    onTimeUp={handleTimeExpired}
                    totalTime={300}
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{quizQuestions[currentQuestion].question}</h3>
                
                <div className="space-y-3 mb-8">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <div 
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-tailwind-blue bg-tailwind-blue/10 dark:bg-tailwind-blue/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-tailwind-blue hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={handlePrevQuestion}
                    disabled={currentQuestion === 0}
                    className={`py-2 px-6 rounded-lg font-medium ${
                      currentQuestion === 0
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextQuestion}
                    className="bg-tailwind-blue text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors button-glow"
                  >
                    {currentQuestion < quizQuestions.length - 1 ? 'Next' : 'Finish Quiz'}
                  </button>
                </div>
              </div>
            )}
            
            {showResults && (
              <QuizResults 
                questions={quizQuestions}
                userAnswers={selectedAnswers}
                resetQuiz={handleStartQuiz}
              />
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
