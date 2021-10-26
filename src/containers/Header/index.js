import React, { useState, useCallback } from 'react';
//import HeaderComponent from '../../components/Header';
import { useLocation } from 'react-router-dom';
//import contactUsApi from '../../api/contactus/createContactUs';

const Header = ({ fixed }) => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setDropdown] = useState(0);
  const pathname = useLocation().pathname;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const routeList = [
    {
      name: 'PRODUCT',
      list: [
        {
          name: 'Exchange Turnkey Solution',
          route: '/crypto-exchange-turnkey-solution',
        },
        {
          name: 'Crypto Liquidity Solution',
          route: '/cryptocurrency-liquidity-solution',
        },
        {
          name: 'OTC Platform Turnkey',
          route: '/otc-trading-system',
        },
        {
          name: 'Mining Pool System',
          route: '/mining-pool-solution-crypto-exchange',
        },
        {
          name: 'Staking & Defi Lending Turnkey',
          route: '/crypto-staking-defi-lending-turnkey-solution',
        },
        // {
        //   name: 'All-In-One Wallet System',
        //   route: '/spot',
        // },
        {
          name: 'Referral & Affiliate System',
          route: '/referral-platform-crypto-exchange',
        },
        // {
        //   name: 'Leverage & Margin Trading',
        //   route: '/spot',
        // },
      ],
    },
    {
      name: 'SOLUTION',
      list: [
        {
          name: 'Cryptocurrency Exchange Turnkey Solution',
          route: '/crypto-exchange-turnkey-solution',
        },
        {
          name: 'Cryptocurrency Liquidity Solution',
          route: '/spot',
        },
      ],
    },
    {
      name: 'QUOTATION',
      route: '/quotation',
      list: [
        {
          name: 'QUOTATION',
          route: '/quotation',
        },
      ],
    },
    {
      name: 'COMPANY',
      list: [
        {
          name: 'About Us',
          route: '/about',
        },
        {
          name: 'Contact Us',
          route: '/contact-us',
        },
        {
          name: 'Our Team',
          route: '/team',
        },
      ],
    },
    {
      name: 'REQUEST DEMO',
      route: '/request-demo',
    },
    {
      name: 'LEGAL',
      list: [
        {
          name: 'Privacy Policy',
          route: '/privacy-policy',
        },
        {
          name: 'Terms Of Use',
          route: '/terms-of-use',
        },
        {
          name: 'Cookie Policy',
          route: '/cookie-policy',
        },
      ],
    },
  ];

  const handleMenuClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleDropdown = useCallback(
    (val) => {
      if (val === openDropdown) {
        setDropdown(0);
        return;
      }
      setDropdown(val);
    },
    [openDropdown]
  );

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
    setIsOpen(false);
    handleSnackbar();
    setLoading(false);
  };

  const handleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    // <HeaderComponent
    //   fixed={fixed}
    //   open={open}
    //   pathname={pathname}
    //   routeList={routeList}
    //   openDropdown={openDropdown}
    //   HandleMenuClick={handleMenuClick}
    //   handleDropdown={handleDropdown}
    //   name={name}
    //   phone={phone}
    //   company={company}
    //   message={message}
    //   email={email}
    //   status={status}
    //   loading={loading}
    //   onChangeHandler={onChangeHandler}
    //   submitHandler={submitHandler}
    //   handleModal={handleModal}
    //   isOpen={isOpen}
    // />
    <></>
  );
};

export default Header;
