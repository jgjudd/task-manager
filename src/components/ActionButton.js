import React from "react";
import Icon from "@material-ui/core/Icon";
import { Card } from "@material-ui/core";
import Textarea from "react-textarea-autosize";
import Button from "@material-ui/core/Button";

class ActionButton extends React.Component {
  state = {
    formOpen: false,
    text: ""
  };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = e => {
    this.setState({ formOpen: false });
  };

  handleInputChange = e => {
    this.setState({ text: e.target.value });
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add Another List" : "Add Another Button";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          ...style.openForButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? "Enter List Title..."
      : "Enter Title For This Card...";

    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card
          style={{
            minHeight: 85,
            minWidth: 272,
            padding: "6px 8px 2px"
          }}
        >
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              overflow: "visible",
              outline: "none",
              border: "none"
            }}
          />
        </Card>
        <div style={style.formButtonGroup}>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{marginLeft: 0, cursor: 'pointer'}}>close</Icon>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const style = {
  openForButtonGroup: {
    display: "flex",
    alignItems: " center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center'
  }
};

export default ActionButton;
