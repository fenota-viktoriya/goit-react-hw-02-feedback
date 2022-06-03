import React from 'react';

import PropTypes from 'prop-types';
export function Statistic({
  good,
  neutral,
  bad,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) {
  return (
    <div>
      <h2>Statistic</h2>
      <p> Goog:{good}</p>
      <p> Neutral: {neutral}</p>
      <p> Bad:{bad} </p>
      <p> Total:{onCountTotalFeedback}</p>
      <p>Positive : {onCountPositiveFeedbackPercentage} %</p>
    </div>
  );
}
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onCountTotalFeedback: PropTypes.number.isRequired,
  onCountPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
