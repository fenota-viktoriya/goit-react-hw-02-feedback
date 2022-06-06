import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Notifications.styled';

export function Notifications({ message }) {
  return <Text>{message}</Text>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
