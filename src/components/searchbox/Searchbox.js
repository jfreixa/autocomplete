import styled from "styled-components";

const Searchbox = styled.input.attrs({
  "aria-multiline": false,
  role: "searchbox",
  "aria-autocomplete": "list",
  "aria-controls": "autocomplete-results"
})`
  border: 1px solid ${props => props.theme.borderColor};
  font-size: 1rem;
  padding: 0.5rem;
  display: block;
  width: 100%;
  border-radius: 4px;
  :focus {
    outline: none;
    background-color: ${props => props.theme.focusColor};
  }
`;

/** @component */
export default Searchbox;
