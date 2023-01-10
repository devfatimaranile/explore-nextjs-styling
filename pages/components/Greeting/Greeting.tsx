import { Title, Wrapper } from "./Greeting.style";

const Greeting = ({
  text,
  nightMode = false,
}: {
  text: string;
  nightMode?: boolean;
}) => {
  return (
    <Wrapper nightMode={nightMode}>
      <Title nightMode={nightMode}>{text}</Title>
    </Wrapper>
  );
};

export default Greeting;
