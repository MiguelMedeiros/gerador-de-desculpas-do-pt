import React, { Component } from "react";
import Clipboard from "react-clipboard.js";
import isEmpty from "../Helpers/isEmpty";

class ClipboardButton extends Component {
  render() {
    if (!isEmpty(this.props.text)) {
      return (
        <Clipboard
          className="button-clipboard"
          data-clipboard-text={this.props.text}
        >
          Copiar
        </Clipboard>
      );
    } else {
      return <div />;
    }
  }
}

export default ClipboardButton;
