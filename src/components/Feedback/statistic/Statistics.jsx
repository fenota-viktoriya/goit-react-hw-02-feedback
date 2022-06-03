import React from 'react';

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
