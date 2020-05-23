import styled from 'styled-components';

export default styled.button`
  border-radius: 9999px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-family: ${p => p.theme.fonts.body};
  width: 100%;
  border: none;
  padding: 1rem;
  max-width: 400px;
`;
