import React from 'react';
import PropTypes from 'prop-types';
export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button
        type="button"
        name="good"
        onClick={event => {
          onLeaveFeedback(event);
        }}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={event => {
          onLeaveFeedback(event);
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={event => {
          onLeaveFeedback(event);
        }}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
