// Wont work since FCC uses some black magic mumbo jumbo but holds core state concepts
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    // binding state methods with this
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  // to access state variables must pass state into setState()
  increment(){
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  decrement(){
    this.setState(state => ({
      count: state.count - 1
    }));
  }

  reset(){
    this.setState(state => ({
      count: 0
    }));
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};