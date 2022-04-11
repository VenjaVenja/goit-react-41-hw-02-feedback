import { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement = event => {
    const feedback = event.target.name;
    console.log(feedback)

    const value = event.target.value;
    console.log(value)
    
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
    // this.setState(prevState => ({ [feedback]: prevState[value] + 1 }));

  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0)
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  render() {

    const { good, neutral, bad } = this.state;
    const handleIncrement = this.handleIncrement;
    const totalFeedback = this.countTotalFeedback;
    const percentage = this.countPositiveFeedbackPercentage;


    // const options = Object.keys(this.state);
    // console.log(options)
    

    // const values = Object.values(this.state);
    // console.log(values)

    console.log(Object.keys(this.state));
    console.log(Object.values(this.state));

    console.log(totalFeedback())
    console.log(percentage())

    return (
      <Fragment>
      <h2>Please leave feedback</h2>
        <button 
        type="button" 
          name="good"
        value={good}  
        onClick={handleIncrement}>Good
        </button>
        <button 
        type="button" 
        name="neutral" 
        onClick={handleIncrement}>Neutral
        </button>
        <button 
        type="button" 
        name="bad" 
        onClick={handleIncrement}>Bad
        </button>

      <h2>Statictics</h2>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Всего:{totalFeedback ()}</p>
        <p>Процент поизитивных{percentage ()}%</p>
      </Fragment>
    )
  }
}

