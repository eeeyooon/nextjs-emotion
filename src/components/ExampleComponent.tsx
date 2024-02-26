import { css } from '@emotion/react';

const color = 'lightpink';
function ExampleComponent() {
  return (
    <div
      css={css`
        background-color: ${color};
      `}
    >
      Emotion styled div
    </div>
  );
}

export default ExampleComponent;
