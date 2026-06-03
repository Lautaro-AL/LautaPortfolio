import { useState, useEffect, useRef } from 'react';

export function useTypingEffect(
  texts: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2200,
) {
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');
  const [textIndex, setTextIndex] = useState(0);
  const prevTextsRef = useRef(texts);

  // Reset when language changes (texts changes identity)
  useEffect(() => {
    if (prevTextsRef.current !== texts) {
      prevTextsRef.current = texts;
      setDisplayText('');
      setPhase('typing');
      setTextIndex(0);
    }
  }, [texts]);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (phase === 'typing') {
      if (displayText === currentText) {
        const timer = setTimeout(() => setPhase('deleting'), pauseDuration);
        return () => clearTimeout(timer);
      }
      const timer = setTimeout(
        () => setDisplayText(currentText.slice(0, displayText.length + 1)),
        typingSpeed,
      );
      return () => clearTimeout(timer);
    }

    if (displayText === '') {
      setTextIndex((prev) => (prev + 1) % texts.length);
      setPhase('typing');
      return;
    }
    const timer = setTimeout(
      () => setDisplayText((prev) => prev.slice(0, -1)),
      deletingSpeed,
    );
    return () => clearTimeout(timer);
  }, [displayText, phase, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}
