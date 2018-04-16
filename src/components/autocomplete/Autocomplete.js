import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Searchbox from "../searchbox/Searchbox";
import Listbox from "../listbox/Listbox";
import Combobox from "../combobox/Combobox";
import Option from "../option/Option";
import Arrow from "../arrow/Arrow";

const items = [
  {
    id: "1",
    name: "Harriet McKinney",
    firstName: "Harriet",
    lastName: "McKinney",
    email: "harriet.mckinney@kinetar.com"
  },
  {
    id: "2",
    name: "Harriet Banks",
    firstName: "Harriet",
    lastName: "Banks",
    email: "harriet.banks@kinetar.com"
  },
  {
    id: "3",
    name: "Mathilda Summers",
    firstName: "Mathilda",
    lastName: "Summers",
    email: "mathilda.summers@kinetar.com"
  },
  {
    id: "4",
    name: "Eugene Wong",
    firstName: "Eugene",
    lastName: "Wong",
    email: "eugene.wong@kinetar.com"
  },
  {
    id: "5",
    name: "Marguerite Ryan",
    firstName: "Marguerite",
    lastName: "Ryan",
    email: "marguerite.ryan@kinetar.com"
  },
  {
    id: "6",
    name: "Donald Butler",
    firstName: "Donald",
    lastName: "Butler",
    email: "donald.butler@kinetar.com"
  },
  {
    id: "7",
    name: "Jim Carlson",
    firstName: "Jim",
    lastName: "Carlson",
    email: "jim.carlson@kinetar.com"
  },
  {
    id: "8",
    name: "Alta Maxwell",
    firstName: "Alta",
    lastName: "Maxwell",
    email: "alta.maxwell@kinetar.com"
  }
];

const Icon = styled(Arrow)`
  position: absolute;
  right: 1rem;
  top: 0.75rem;
  transition: 0.5s all;
  transform: ${props => (props.selected ? "rotate(-180deg)" : "rotate(0deg)")};
  pointer-events: none;
`;

export default class Autocomplete extends Component {
  static propTypes = {
    ariaLabelledBy: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
    children: PropTypes.func
  };

  static defaultProps = {
    onSelect: () => {},
    children: item => item.name
  };

  state = {
    isOpen: false,
    value: "",
    arrowCounter: 0
  };

  getActive = arrowCounter => this.filteredItems()[arrowCounter];

  handleKeyPress = event => {
    const { isOpen, arrowCounter } = this.state;
    if (!isOpen) {
      if (event.key === "ArrowDown") {
        this.setState({
          isOpen: true,
          arrowCounter: 0
        });
        event.preventDefault();
        event.stopPropagation();
      }
      return;
    }

    if (event.key === "Enter") {
      this.select(this.getActive(arrowCounter));
      event.preventDefault();
      event.stopPropagation();
    }
    const elementHeight =
      this.listbox.scrollHeight / this.filteredItems().length;

    if (event.key === "ArrowUp" && arrowCounter > 0) {
      this.listbox.scrollTop = elementHeight * (arrowCounter - 1);
      this.setState({
        arrowCounter: arrowCounter - 1
      });
      event.preventDefault();
      event.stopPropagation();
    }
    if (
      event.key === "ArrowDown" &&
      arrowCounter < this.filteredItems().length - 1
    ) {
      this.listbox.scrollTop = elementHeight * (arrowCounter + 1);
      this.setState({
        arrowCounter: arrowCounter + 1
      });
      event.preventDefault();
      event.stopPropagation();
    }
  };

  select = item => {
    this.props.onSelect(item);
    this.searchbox.blur();
    this.setState({
      arrowCounter: -1,
      value: item.name,
      isOpen: false
    });
  };

  activeDescendant = () => {
    const item = this.getActive(this.state.arrowCounter);
    return item ? item.id : "";
  };

  filteredItems = () =>
    items.filter(item =>
      item.name.toLowerCase().includes(this.state.value.toLowerCase())
    );

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleFocus = () => {
    const arrowCounter = 0;
    this.setState({
      isOpen: true,
      arrowCounter
    });
  };

  handleBlur = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { ariaLabelledBy, children } = this.props;
    const { value, isOpen } = this.state;
    const controlsId = "autocomplete-results";
    const activeDescendant = this.activeDescendant();
    return (
      <Combobox
        aria-owns={controlsId}
        aria-controls={controlsId}
        aria-expanded={isOpen}
      >
        <Searchbox
          type="text"
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          aria-activedescendant={activeDescendant}
          aria-labelledby={ariaLabelledBy}
          innerRef={searchbox => {
            this.searchbox = searchbox;
          }}
        />
        <Icon selected={isOpen} />
        {isOpen && (
          <Listbox
            id={controlsId}
            innerRef={listbox => {
              this.listbox = listbox;
            }}
          >
            {this.filteredItems().map(item => (
              <Option
                key={item.id}
                id={item.id}
                onMouseDown={() => this.select(item)}
                active={item.id === activeDescendant}
                aria-selected={item.id === activeDescendant}
              >
                {children(item)}
              </Option>
            ))}
          </Listbox>
        )}
      </Combobox>
    );
  }
}
