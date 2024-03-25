import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  texts?: string[]; // Array of texts to cycle through
  typingSpeed?: number; // Speed of typing, milliseconds per character
  deletingSpeed?: number; // Speed of deleting, milliseconds per character
  delayBetweenTexts?: number; // Delay between texts, milliseconds
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  texts = [
    "Transform your Space into a Palace.",
    "Elegance in Every Detail...",
    "Crafting Comfort for Every Home",
  ],
  typingSpeed = 250,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
}) => {
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    let timer: number | any;

    if (isDeleting) {
      timer = setTimeout(() => {
        setSubText(subText.slice(0, subText.length - 1));
        setTypingDelay(deletingSpeed);
      }, typingDelay);
    } else {
      timer = setTimeout(() => {
        setSubText(texts[index].slice(0, subText.length + 1));
        setTypingDelay(typingSpeed);
      }, typingDelay);
    }

    if (!isDeleting && subText === texts[index]) {
      setIsDeleting(true);
      setTypingDelay(delayBetweenTexts);
    } else if (isDeleting && subText === "") {
      setIsDeleting(false);
      setIndex((index + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [
    subText,
    index,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
    typingDelay,
  ]);

  return (
    <h2 className="typing-effect text-center text-2xl font-semibold">
      {subText}
      <span className="typing-cursor">|</span>
    </h2>
  );
};

export default TypingEffect;
