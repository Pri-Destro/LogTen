import { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <div className='text-yellow-100 p-2 animate-pulse text-6xl font-pacifico text-center translate-y-32'>
    <p>{displayedText}</p>
    </div>;
};

export default TypingAnimation;
