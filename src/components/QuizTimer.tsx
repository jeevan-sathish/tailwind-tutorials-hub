
import { useState, useEffect } from 'react';

interface QuizTimerProps {
  isRunning: boolean;
  onTimeUp: () => void;
  totalTime: number; // in seconds
}

const QuizTimer: React.FC<QuizTimerProps> = ({ isRunning, onTimeUp, totalTime }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, onTimeUp]);
  
  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(totalTime);
    }
  }, [isRunning, totalTime]);
  
  // Convert seconds to minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  // Calculate progress percentage
  const progressPercentage = (timeLeft / totalTime) * 100;
  
  // Determine color based on time left
  let progressColor = "bg-green-500";
  if (progressPercentage < 50) {
    progressColor = "bg-yellow-500";
  }
  if (progressPercentage < 25) {
    progressColor = "bg-red-500";
  }
  
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 text-sm font-medium">
        <span>Time Remaining</span>
        <span className={progressPercentage < 25 ? "text-red-500" : ""}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${progressColor} transition-all duration-300 ease-linear`}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default QuizTimer;
