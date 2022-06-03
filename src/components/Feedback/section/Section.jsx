import React from 'react';
import PropTypes from 'prop-types';
import { Section, Title } from './Section.styled';

export function Sections({ title, children }) {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
