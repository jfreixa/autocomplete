import styled from "styled-components";

const Option = styled.li.attrs({
  role: "option"
})`
  width: 100%;
  background-color: ${props =>
    props.active ? props.theme.focusColor : "#fff"};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  font-size: 1rem;
`;

/** @component */
export default Option;
