import { Component } from 'react';
import { Sections } from '../Section';
import { Statistic } from '../Statistic';
import { Notifications } from '../Notifications';
import { Container } from './App.styled';
import { FeedbackOptions } from '../FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = e => {
    const option = e.currentTarget.name;
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { state } = this;
    return Object.values(state).reduce((a, b) => {
      let total;
      total = a + b;
      return total;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const countTotalFeedback = this.countTotalFeedback();
    const { good } = this.state;

    if (this.countTotalFeedback() !== 0) {
      return Math.ceil((good / countTotalFeedback) * 100);
    }
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const changeState = this.changeState;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Sections title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={changeState} />
          {countTotalFeedback !== 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              onTotalFeedback={countTotalFeedback}
              onPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notifications message="There is no feedback :("></Notifications>
          )}
        </Sections>
      </Container>
    );
  }
}
