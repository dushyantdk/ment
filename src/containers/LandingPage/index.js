import React, { useState, useCallback } from 'react';
import LandingPageComponent from '../../components/LandingPage';
import contactUsApi from '../../api/contactus/createContactUs';

const LandingPage = () => {
  const [productDropdownOpen, setProductOpen] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleProductDropdown = useCallback((val) => {
    // if (val === productDropdownOpen) {
    //   setProductOpen(0);
    //   return;
    // }
    setProductOpen(val);
  }, []);

  const handleAssets = useCallback((val) => {
    setSelectedAsset(val);
  }, []);

  const handleSnackbar = useCallback(() => {
    setTimeout(() => {
      setStatus('');
    }, 3000);
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
    <LandingPageComponent
      selectedAsset={selectedAsset}
      productDropdownOpen={productDropdownOpen}
      handleProductDropdown={handleProductDropdown}
      handleAssets={handleAssets}
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

export default LandingPage;
