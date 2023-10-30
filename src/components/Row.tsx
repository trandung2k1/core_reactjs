import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  children: React.ReactNode;
  isHighlighted: boolean;
}
const Row: React.FC<Props> = ({ children, isHighlighted }) => {
  return <div style={isHighlighted ? { color: 'red' } : {}}>{children}</div>;
};
Row.propTypes = {
  children: PropTypes.element.isRequired,
  isHighlighted: PropTypes.bool.isRequired,
};

export default Row;
