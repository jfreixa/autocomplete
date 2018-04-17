import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeWrapper from "./wrapper/ThemeWrapper";

const Main = () => (
  <ThemeWrapper>
    <App />
  </ThemeWrapper>
);

ReactDOM.render(<Main />, document.getElementById('root'));