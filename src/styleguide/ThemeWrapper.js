/* eslint-disable no-unused-expressions */

import React from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import PropTypes from "prop-types";

import theme from "../theme";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
  :root {
    font-size: 16px;
  }
`;

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
export default ThemeWrapper;
