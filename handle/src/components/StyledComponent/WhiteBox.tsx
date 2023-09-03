import * as React from 'react';
import styled from 'styled-components/native';

type Props = {
  children?: React.ReactNode;
  style?: any;
};

function WhiteBox({ children, style }: Props) {
  return (
    <Container
      style={{
        ...style,
      }}>
      {children}
    </Container>
  );
}

const Container = styled.View`
  background-color: #ffffff40;
  border-bottom: 1px solid white;
  border-radius: 10px;
  margin: 5px auto;
`;

export default WhiteBox;
