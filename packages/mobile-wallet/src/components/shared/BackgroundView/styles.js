import styled from 'styled-components';

const variants = {
  center: {
    content: {
      justifyContent: 'center',
      paddingBottom: 0,
    },
    action: {
      position: 'absolute',
    },
  },
  bottom: {
    content: {
      justifyContent: 'flex-end',
      paddingBottom: 50,
    },
    action: {
      position: 'relative',
    },
  },
};

export const Container = styled.ImageBackground`
  align-items: center;
  flex-direction: column;
  flex: 1;
  padding-left: 24;
  padding-right: 24;
  padding-bottom: 16;
`;

export const Content = styled.View`
  flex: 1;
  align-items: stretch;
  flex-direction: column;
  justify-content: ${({ theme }) =>
    variants[theme.variant].content.justifyContent};
  padding-bottom: ${({ theme }) =>
    variants[theme.variant].content.paddingBottom};
`;

export const Action = styled.View`
  position: ${({ theme }) => variants[theme.variant].action.position};
  bottom: 0;
  width: 100%;
`;
