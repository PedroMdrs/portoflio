import { useTypewriter } from "./Hooks/useTypeWriter";

const Typewriter = ({
  text,
  speed,
  container,
  delay,
}: {
  text: string;
  speed?: number;
  container?: React.ElementType;
  delay?: number;
}) => {
  const displayText = useTypewriter(text, speed, delay);
  const Container = container || "div";
  return container ? (
    <Container>{displayText}</Container>
  ) : (
    <div>{displayText}</div>
  );
};

export default Typewriter;
