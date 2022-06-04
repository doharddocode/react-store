import React, { Component } from "react";
import PropTypes from "prop-types"

export default class ErrorIndicator extends Component {
  static propTypes = {
    problemName: PropTypes.string
  }

  static defaultProps = {
    problemName: "К сожалению, возникла непредвиденная ошибка. Мы уже занимаемся ее устранением."
  }

  render() {
    return (
      <div className="alert alert-danger" role="alert">
        { this.props.problemName }
      </div>
    );
  }
}