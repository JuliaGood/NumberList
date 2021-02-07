import React, {Component} from 'react';
import Number from './Number';

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
    this.removeNumber = this.removeNumber.bind(this);
  };

  removeNumber(number) {
    console.log('number was removed!!!')
    this.setState({ nums: this.state.nums.filter(num => num !== number)});
  }

  render() {
    let nums = this.state.nums.map(num => (
      <Number 
        value={num} 
        remove={this.removeNumber}
      />
    ));
    return(
      <div >
        <h1>First Number List: </h1>
        <ul>{nums}</ul>
      </div>
    );
  }

  // using of arrow-INLINE-f (inline binding) - when it's re-rendering - it creates new Fs each time 
  // There is a better way, to use a SINGLE BINDING function:
}

export default NumberList;
