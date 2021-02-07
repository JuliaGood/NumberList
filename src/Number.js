import React, {Component} from 'react';

class Number extends Component {
  handleRemove = (event) => {
    this.props.remove(this.props.value);
  }
  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}
// this X-buttton will work the following way:
// onClick (here, in btn) calls a F in the parent component ('removeNumber')

export default Number;