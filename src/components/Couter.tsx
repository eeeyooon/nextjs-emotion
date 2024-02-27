import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import counterState from '@/states/counterState';

export default function Counter() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <CounterWrapper>
      <p>리코일 테스트 (카운터)</p>
      <p>Count: {count}</p>
      <CounterButton type="button" onClick={() => setCount(count + 1)}>
        Increment
      </CounterButton>
    </CounterWrapper>
  );
}

const CounterWrapper = styled.section`
  padding: 5px;
  margin: 10px;
  background-color: skyblue;
`;

const CounterButton = styled.button`
  background-color: yellow;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: gold;
  }
`;
