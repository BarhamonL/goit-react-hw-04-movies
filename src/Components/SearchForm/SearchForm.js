import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchForm.module.css";

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    const { value } = this.state;
    e.preventDefault();

    this.props.onSubmit(value);

    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
            className={styles.input}
          />
          Enter query
        </label>
      </form>
    );
  }
}

export default SearchForm;
