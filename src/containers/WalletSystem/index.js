import React, { useState, useCallback, useEffect } from 'react';
import SpotTradingComponent from '../../components/WalletSystem';
import contactUsApi from '../../api/contactus/createContactUs';

const SpotTrading = () => {
  const [selectedAsset, setSelectedAsset] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [faqOpen, setFaqOpen] = useState(0);

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

  const handleFaq = useCallback(
    (val) => {
      if (val === faqOpen) {
        setFaqOpen(0);
        return;
      }
      setFaqOpen(val);
    },
    [faqOpen]
  );

  const handleAssets = useCallback((val) => {
    setSelectedAsset(val);
  }, []);

  const handleCoins = useCallback((val) => {
    setSelectedCoin(val);
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
    <SpotTradingComponent
      fixedTop={scrollPosition > 300}
      selectedAsset={selectedAsset}
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
      handleFaq={handleFaq}
      faqOpen={faqOpen}
      selectedCoin={selectedCoin}
      handleCoins={handleCoins}
    />
  );
};

export default SpotTrading;
