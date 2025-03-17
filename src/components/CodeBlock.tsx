
import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'html', title }) => {
  // Strip any leading/trailing blank lines and normalize indentation
  const normalizedCode = code.trim();
  
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover-scale theme-transition">
      {title && (
        <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 border-b border-gray-200 dark:border-gray-600 flex items-center justify-between theme-transition">
          <div className="font-medium text-gray-700 dark:text-gray-200">{title}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{language}</div>
        </div>
      )}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-10 bg-gray-800 dark:bg-gray-900 flex items-center px-4 theme-transition">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <pre className="pt-10 p-4 bg-gray-900 dark:bg-gray-950 overflow-x-auto theme-transition">
          <code className="text-sm md:text-base text-gray-200 dark:text-gray-100 font-mono">{normalizedCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
