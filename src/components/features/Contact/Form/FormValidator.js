const FormValidator = {

  validate(name, email, subject, message) {
    const errors = [];

    if (name.length < 3) {
      errors.push('Name should be at least 3 charcters long');
    }
    if (email.length < 5) {
      errors.push('Email should be at least 5 charcters long');
    }
    if (subject.length < 5) {
      errors.push('Subject should be at least 5 charcters long');
    }
    if (message.length < 10) {
      errors.push('Message should be at least 10 charcters long');
    }
    if (email.split('').filter((x) => x === '@').length !== 1) {
      errors.push('Email should contain a @');
    }
    if (email.indexOf('.') === -1) {
      errors.push('Email should contain at least one dot');
    }

    return errors;
  },
};

module.exports = FormValidator;
