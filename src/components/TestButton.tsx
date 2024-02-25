import styled from "@emotion/styled";

type Props = {
  message: string;
};
export default function TestButton({ message }: Props) {
  return <StyledButton>{message}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: rebeccapurple;
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
