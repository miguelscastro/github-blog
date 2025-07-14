import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme['base-border']};
    padding: 1rem;
    ${mixins.fonts.textM}

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
  @media (max-width: 768px) {
    max-width: 320px;
  }
`
