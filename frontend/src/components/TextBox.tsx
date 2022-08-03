import React from "react";

export interface Props {
  type?: string,
  value?: string,
  placeholder?: string,
  className?: string,
  autoFocus?: boolean,
  disabled?: boolean,
  maxLength?: number,
  valid?: boolean,
  errorMessage?: string,
  tooltipPlacement?: string,
  onChange?: (string) => any,
  onFocus?: () => any,
  onBlur?: () => any,
  autocomplete?: string,
  validationFunction?: () => boolean;
  onClear?: () => any | void;
}

export interface State {
  viewText: boolean,
  value: string
}

class TextBox extends React.Component<Props, State> {
  static defaultProps: Partial<Props> = {
    type: "text",
    value: "",
    placeholder: "",
    className: "",
    autoFocus: false,
    disabled: false,
    maxLength: undefined,
    valid: undefined,
    errorMessage: undefined,
    tooltipPlacement: "Top",
    validationFunction: undefined,
    onChange: () => {
    },
    onFocus: () => {
    },
    onBlur: () => {
    },
    autocomplete: "new-password",
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      viewText: false,
      value: this.props.value,
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.viewText = this.viewText.bind(this);
    this.clearText = this.clearText.bind(this);
  }

  render() {
    return (
      <>
          <input
            type={this.state.viewText && this.props.type === "password" ? "text" : this.props.type}
            ref={thisInput => this.inputBox = thisInput}
            value={this.props.value}
            className={`${this.props.className} ${this.props.valid ? this.props.className + " is-valid" : this.props.valid == false ? this.props.className + " is-invalid" : ""}`}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            autoFocus={this.props.autoFocus}
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
            maxLength={this.props.maxLength}
            spellCheck={false}
            autoComplete={this.props.autocomplete}
          />
      </>
    )
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  onFocus() {
    this.props.onFocus();
  }

  onBlur() {
    this.props.onBlur();
  }

  clearText() {
    this.props.onClear();
  }

  viewText() {
    this.inputBox.focus();
    this.setState({
      viewText: !this.state.viewText
    });
  }

  focus() {
    this.inputBox.focus();
  }

  inputBox = undefined;
}

export default TextBox;