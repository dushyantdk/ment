import React, { useState, useCallback, useEffect } from 'react';
import ExchangeComponent from '../../components/MiningPool';
//import contactUsApi from '../../api/contactus/createContactUs';

const ExchangeSolution = () => {
  const [productDropdownOpen, setProductOpen] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [lockActive, setLockActive] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleProductDropdown = useCallback((val) => {
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
    // const response = await contactUsApi({
    //   name: name,
    //   email: email,
    //   phone: phone,
    //   company: company,
    //   message: message,
    // });

    // if (response.status === 201 || response.status === 200) {
    //   setStatus({
    //     type: 'Success',
    //     message: 'Thank You for contacting, We will get back to you ASAP!',
    //   });
    //   setName('');
    //   setEmail('');
    //   setCompany('');
    //   setPhone('');
    //   setMessage('');
    // } else {
    //   setStatus({
    //     type: 'Error',
    //     message: 'Oops! Something went wrong, Please try again.',
    //   });
    // }
    // handleSnackbar();
    setLoading(false);
  };

  const handleLockState = useCallback((val) => {
    setLockActive(val);
  }, []);

  return (
    <ExchangeComponent
      fixedTop={scrollPosition > 300}
      selectedAsset={selectedAsset}
      productDropdownOpen={productDropdownOpen}
      handleProductDropdown={handleProductDropdown}
      handleAssets={handleAssets}
      message={message}
      name={name}
      email={email}
      phone={phone}
      company={company}
      loading={loading}
      status={status}
      onChangeHandler={onChangeHandler}
      submitHandler={submitHandler}
      lockActive={lockActive}
      handleLockState={handleLockState}
    />
  );
};

export default ExchangeSolution;
