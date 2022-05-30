import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
class Picker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  handleChange(date) {
    this.setState({startDate: date})
    
  }
  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);
  }
 
  render() {
    return (
      <Container >
      <form onSubmit={ this.onFormSubmit }>
        <h5>Select date below for session</h5>
        <div className="form-group">
          <DatePicker
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={20}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              inline
          />
          {/* <button className="btn btn-primary">Select Date</button> */}
          <input type="text" value={this.state.startDate} onChange={this.handleChange} />
        </div>
      </form>
      </Container>
    );
  }
}
export default Picker;