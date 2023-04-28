import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class App extends Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  static propTypes = {
    initialValueGood: PropTypes.number.isRequired,
    initialValueNeutral: PropTypes.number.isRequired,
    initialValueBad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  handleOnBtnClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    return Math.round((good * 100) / (good + bad + neutral));
  };

  render() {
    const { good, bad, neutral } = this.state;
    const stateNames = Object.keys(this.state);
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions
          options={stateNames}
          onLeaveFeedback={this.handleOnBtnClick}
        ></FeedbackOptions>
        {good > 0 || bad > 0 || neutral > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    );
  }
}
