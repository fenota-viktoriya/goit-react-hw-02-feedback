import React from 'react';
import { AiOutlineSmile } from 'react-icons/ai';
import { AiOutlineFrown } from 'react-icons/ai';
import { AiOutlineMeh } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { BtnFeedback, BtnDiv } from './FeedbackOptions.styled';
export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <BtnDiv>
      <BtnFeedback
        type="button"
        name="good"
        onClick={event => {
          onLeaveFeedback(event);
        }}
      >
        <AiOutlineSmile />
      </BtnFeedback>
      <BtnFeedback
        type="button"
        name="neutral"
        onClick={event => {
          onLeaveFeedback(event);
        }}
      >
        <AiOutlineMeh />
      </BtnFeedback>
      <BtnFeedback
        type="button"
        name="bad"
        onClick={event => {
          onLeaveFeedback(event);
        }}
      >
        <AiOutlineFrown />
      </BtnFeedback>
    </BtnDiv>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
