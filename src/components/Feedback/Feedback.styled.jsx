import styled from 'styled-components';

export const Button = styled.button`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.boxShadow.main};
  text-transform: capitalize;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
    transition: color ${p => p.theme.transition.cubic}, background-color ${p => p.theme.transition.cubic};
  }
`;