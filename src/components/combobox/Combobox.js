import styled from "styled-components";

const Combobox = styled.div.attrs({
  role: "combobox",
  "aria-haspopup": "listbox"
})`
  position: relative;
`;

/** @component */
export default Combobox;
