import styled from "@emotion/styled";

type Props = {
  message: string;
};

type StyledProps = {
  color: string;
};

export default function TestButton({ message }: Props) {
  return <StyledButton color="primary">{message}</StyledButton>;
}

const StyledButton = styled.button<StyledProps>`
  background-color: ${({ color }) =>
    color === "primary" ? "rebeccapurple" : "blue"};
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: indigo;
  }
`;
