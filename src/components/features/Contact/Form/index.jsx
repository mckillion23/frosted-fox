import React from 'react';
import * as emailjs from 'emailjs-com';
import Email from './Email';
import Message from './Message';
import Name from './Name';
import Subject from './Subject';
import Submit from './Submit';
import validator from './FormValidator';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      errors: [],
    };
  }

    handleChange = (e) => {
      this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const {
        name, email, subject, message,
      } = this.state;
      const errors = validator.validate(name, email, subject, message);
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      }
      const templateParams = {
        from: email,
        from_name: name,
        to_name: 'Frosted Fox',
        subject,
        text: message,
      };

      emailjs.send(
        'service_qy7gvqb',
        'template_wqjs9b8',
        templateParams,
        'user_3F9rLyCEaIdyr07Xm8jmg',
      );

      this.resetForm();
    };

    resetForm() {
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
        errors: [],
      });
      document.getElementById('send-email-form').reset();
    }

    render() {
      const { errors } = this.state;
      return (
        <form
          id="send-email-form"
          onSubmit={this.handleSubmit}
          className="xs:w-11/12 xs:mt-2 xs:pb-4
                             sm:w-11/12 sm:mt-10 sm:pb-6
                             md:w-11/12 md:mt-12 md:pb-8
                             lg:w-11/12 lg:mt-12 lg:pb-8
                             block-inline bg-gray-100 rounded-lg mx-auto w-11/12 pb-16 px-8 pt-4 mt-24"
        >
          <div className="flex flex-col">
            {errors.map((error) => (
              <p className="bg-red-300 tracking-wide my-2 rounded-md mt-1 px-4 py-2 border focus:border-brand focus:shadow-outline-sm focus:outline-none" key={error}>{error}</p>
            ))}
          </div>
          <Name onChange={this.handleChange} />
          <Email onChange={this.handleChange} />
          <Subject onChange={this.handleChange} />
          <Message onChange={this.handleChange} />
          <Submit sendEmail={this.sendEmail} />
        </form>
      );
    }
}

export default Form;
