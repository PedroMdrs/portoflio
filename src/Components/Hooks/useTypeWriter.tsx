import React from "react";

export const useTypewriter = (text: string, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);

      return () => {
        clearInterval(typingInterval);
      };
    }, delay * 1000);
  }, [text, speed, delay]);
  return displayText;
};
