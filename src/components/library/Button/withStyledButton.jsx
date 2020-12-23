import React from 'react';
import { Button } from './Brand';

const withStyledButton = (defaultClasses, props) => {
  const { classes } = props;
  classes && defaultClasses.push(classes);
  return <Button {...props} classes={defaultClasses.join(' ')} />;
};

export default withStyledButton;
