import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: inline-flex;
  border-radius: 8px;
  color: #FFF;
  background-color: #5bb8cc;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
`;

const Avatar = ({ firstName, lastName }) => (
  <Wrapper>
    {firstName[0].toUpperCase()}
    {lastName[0].toUpperCase()}
  </Wrapper>
);

Avatar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default Avatar;
