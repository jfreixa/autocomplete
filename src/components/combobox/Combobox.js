import styled from "styled-components";

const Combobox = styled.div.attrs({
  role: "combobox",
  "aria-haspopup": "listbox"
})`
  position: relative;
  min-width: 300px;
`;

export default Combobox;
