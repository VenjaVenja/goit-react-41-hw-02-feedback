import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement = event => {
    const feedback = event.target.name;
    // console.log(feedback)
  
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0)
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  render() {

    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
   
    const handleIncrement = this.handleIncrement;
    const totalFeedback = this.countTotalFeedback;
    const percentage = this.countPositiveFeedbackPercentage;

    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={percentage()}
        />
      </Section>
      </>
    )
  }
}

