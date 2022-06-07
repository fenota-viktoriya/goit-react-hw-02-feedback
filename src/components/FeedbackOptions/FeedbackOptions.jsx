import React from 'react';
import PropTypes from 'prop-types';
import { BtnFeedback, BtnDiv } from './FeedbackOptions.styled';
import { AiOutlineSmile, AiOutlineFrown, AiOutlineMeh } from 'react-icons/ai';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnDiv>
      {Object.keys(options).map(option => (
        <BtnFeedback
          key={option}
          type="button"
          name={option}
          onClick={option => {
            onLeaveFeedback(option);
          }}
        >
          {option === 'good' && <AiOutlineSmile />}
          {option === 'neutral' && <AiOutlineMeh />}
          {option === 'bad' && <AiOutlineFrown />}
        </BtnFeedback>
      ))}
    </BtnDiv>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
