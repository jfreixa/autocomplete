import styled from "styled-components";

const Listbox = styled.ul.attrs({
  role: "listbox"
})`
  list-style: none;
  padding: 0;
  position: absolute;
  width: 100%;
  margin-top: 0.5em;
  overflow: scroll;
  max-height: 200px;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  > *:last-child {
    border-bottom: none;
  }
`;

export default Listbox;
