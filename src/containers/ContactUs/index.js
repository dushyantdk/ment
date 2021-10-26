import React, { useState, useEffect, useCallback } from 'react';
import ContactUsComponent from '../../components/ContactUs';
import contactUsApi from '../../api/contactus/createContactUs';

const ContactUs = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleSnackbar = useCallback(() => {
    setTimeout(() => {
      setStatus('');
    }, 3000);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onChangeHandler = useCallback((e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'phone') {
      setPhone(e.target.value);
    }
    if (e.target.name === 'company') {
      setCompany(e.target.value);
    }
    if (e.target.name === 'message') {
      setMessage(e.target.value);
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const response = await contactUsApi({
      name: name,
      email: email,
      phone: phone,
      company: company,
      message: message,
    });

    if (response.status === 201 || response.status === 200) {
      setStatus({
        type: 'Success',
        message: 'Thank You for contacting, We will get back to you ASAP!',
      });
      setName('');
      setEmail('');
      setCompany('');
      setPhone('');
      setMessage('');
    } else {
      setStatus({
        type: 'Error',
        message: 'Oops! Something went wrong, Please try again.',
      });
    }
    handleSnackbar();
    setLoading(false);
  };

  return (
    <ContactUsComponent
      fixedTop={scrollPosition > 300}
      name={name}
      phone={phone}
      company={company}
      message={message}
      email={email}
      status={status}
      loading={loading}
      onChangeHandler={onChangeHandler}
      submitHandler={submitHandler}
    />
  );
};

export default ContactUs;