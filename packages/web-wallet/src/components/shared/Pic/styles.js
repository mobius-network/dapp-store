import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 8px;
  height: 128px;
  overflow: hidden;
  width: 128px;
`;
