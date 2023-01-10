import { Title, Wrapper } from "./SimpleGreeting.style";

const SimpleGreeting = ({
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

export default SimpleGreeting;
