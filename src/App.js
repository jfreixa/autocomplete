import React, { Component } from 'react';
import styled from "styled-components";
import {Autocomplete, Item} from "./components";
import json from './employees.json';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    const employees = json.data.map(employee => {
      const accountId = employee.relationships.account.data.id;

      const {email} =  json.included.find((obj) => obj.id === accountId).attributes;

      const {name, lastName, firstName} = employee.attributes
      return {
        id: employee.id,
        name,
        lastName,
        firstName,
        email
      }
    });

    return (
      <Container>
        <div id="manager_selector">
          <Autocomplete ariaLabelledBy="manager_selector" items={employees} onSelect={window.console.log} >
            {(item) => (
              <Item
                name={item.name}
                lastName={item.lastName}
                email={item.email}
                firstName={item.firstName}
              />
            )}
          </Autocomplete>
        </div>
      </Container>
    );
  }
}

export default App;