import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[0]} ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.accent};
`;