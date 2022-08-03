import React from "react";
import Picker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment, {Moment} from "moment";

export interface Props {
  className?: string,
  date: Date,
  monthsShown?: number,
  placeholderText?: string,
  handleChange: (date: Date) => any,
  disabled?: boolean,
  label?: string,
  valid?: boolean,
  errorMessage?: string,
  minDate?: Date,
  maxDate?: Date
}

export interface State {
  date: Date,
}

class DatePicker extends React.Component<Props, State> {
  static defaultProps = {
    className: "",
    date: undefined,
    monthsShown: 1,
    placeholderText: "",
    handleChange: () => null,
    disabled: false,
    label: undefined,
    valid: true,
    errorMessage: undefined,
    minDate: undefined,
    maxDate: undefined
  };

  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className={"DatePicker"}>
        {this.props.label && <div className="label">{this.props.label}</div>}
        <Picker
          className={this.props.className}
          dateFormat={"dd/MM/yyyy"}
          selected={this.state.date}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          onChange={this.handleChange}
          monthsShown={this.props.monthsShown}
          disabled={this.props.disabled}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
          placeholderText={this.props.placeholderText}
        />
      </div>
    );
  }

  handleChange(date: Date) {
    if (date == null)
      date = undefined;
    this.setState({date: date});
    this.props.handleChange(date);
  }

}

export default DatePicker;