import { Component } from 'react';
import { Sections } from './Feedback/section';
import { Statistic } from './Feedback/statistic';
import { FeedbackOptions } from './Feedback/feedbackOptions';
import { Notification } from './notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = e => {
    const name = e.currentTarget.name;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    //const { state } = this.state;
    return Object.values(this.state).reduce((a, b) => {
      let total;
      total = a + b;
      return total;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    //const { countTotalFeedback } = this.countTotalFeedback;
    //const { good } = this.state.good;

    if (this.countTotalFeedback() !== 0) {
      return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
    }
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    //const { changeState } = this.changeState;
    //const { countTotalFeedback } = this.countTotalFeedback;
    // const { countPositiveFeedbackPercentage } =
    //   this.countPositiveFeedbackPercentage;
    return (
      <Sections title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.changeState} />
        {this.countTotalFeedback() !== 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            onCountTotalFeedback={this.countTotalFeedback()}
            onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Sections>
    );
  }
}
