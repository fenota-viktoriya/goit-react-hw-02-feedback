import React from 'react';
import PropTypes from 'prop-types';
import {
  StatWrapper,
  StatTitle,
  StatReactionText,
  StatValue,
} from './Statistic.styled';
export function Statistic({
  good,
  neutral,
  bad,
  onTotalFeedback,
  onPositiveFeedbackPercentage,
}) {
  return (
    <StatWrapper>
      <StatTitle>Statistic</StatTitle>

      <StatReactionText>
        Goog: <StatValue>{good}</StatValue>
      </StatReactionText>
      <StatReactionText>
        Neutral: <StatValue> {neutral}</StatValue>
      </StatReactionText>
      <StatReactionText>
        Bad: <StatValue> {bad}</StatValue>
      </StatReactionText>
      <StatReactionText>
        Total: <StatValue>{onTotalFeedback}</StatValue>
      </StatReactionText>
      <StatReactionText>
        Positive : <StatValue>{onPositiveFeedbackPercentage}%</StatValue>
      </StatReactionText>
    </StatWrapper>
  );
}
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onTotalFeedback: PropTypes.number.isRequired,
  onPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
