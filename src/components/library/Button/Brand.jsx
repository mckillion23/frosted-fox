import React from 'react';
import PropTypes from 'prop-types';
import withStyledButton from './withStyledButton';

const commonClasses = ['bg-brand outline-none font-helvetica text-white tracking-wider cursor-pointer focus:shadow-outline'];

const BrandButtonDefault = (props) => {
  const defaultClasses = ['w-26 py-2 text-base rounded-base mr-5'];
  defaultClasses.push(commonClasses);
  return withStyledButton(defaultClasses, props);
};

const BrandButtonLarge = (props) => {
  const defaultClasses = ['w-full py-4 rounded-md outline-none cursor-pointer'];
  defaultClasses.push(commonClasses);
  return withStyledButton(defaultClasses, props);
};

export const Button = ({
  type,
  value,
  event,
  classes,
}) => {
  let result;
  if (type === 'submit') {
    result = (
      <input
        className={classes}
        type={type}
        value={value}
        onSubmit={event}
      />
    );
  }

  if (type === 'button') {
    result = (
      <input
        className={classes}
        type={type}
        value={value}
        onClick={event}
      />
    );
  }
  return result;
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  classes: PropTypes.string,
};

export default BrandButtonDefault;
export { BrandButtonLarge };
