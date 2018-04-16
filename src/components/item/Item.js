import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Avatar from "../avatar/Avatar";

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0.5rem;
  color: #636364;
`;

const LogoWrapper = styled.div`
  flex: 0 0 auto;
`;

const BodyWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
`;

const Small = styled.span`
  font-size: 0.8em;
  color: #8d9699;
`;

const Item = ({ firstName, lastName, name, email }) => (
  <Wrapper>
    <LogoWrapper>
      <Avatar firstName={firstName} lastName={lastName} />
    </LogoWrapper>
    <BodyWrapper>
      <strong>{name}</strong>
      <Small>{email}</Small>
    </BodyWrapper>
  </Wrapper>
);

Item.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Item;
