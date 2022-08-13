import styled from 'styled-components';

export const Container = styled.section`
  padding: ${p => p.theme.space[0]} ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.accent};
`;