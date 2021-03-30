import React from 'react';

import ReactDOM from 'react-dom';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(target.checked);
    console.log({ [name]: value });
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

// ReactDOM.render(<Reservation />, document.getElementById('root'));

export default (): React.ReactNode => {
  return <Reservation />;
};

// ReactDOM.render(<input value="hi" />, document.getElementById('root'));

// setTimeout(function () {
//   ReactDOM.render(<input value={null} />, document.getElementById('root'));
// }, 5000);