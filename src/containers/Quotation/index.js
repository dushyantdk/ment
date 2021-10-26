import React, { useState, useEffect, useCallback } from 'react';
import QuotationComponent from '../../components/Quotation/Quotation';
import Getaquote from "../../components/Quotation/Getaquote";
// import contactUsApi from '../../api/contactus/createContactUs';

const Quotation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [talkName, setTalkName] = useState('');
  const [talkEmail, setTalkEmail] = useState('');
  const [talkCompany, setTalkCompany] = useState('');
  const [talkPhone, setTalkPhone] = useState('');
  const [talkStatus, setTalkStatus] = useState('');
  const [demoName, setDemoName] = useState('');
  const [demoEmail, setDemoEmail] = useState('');
  const [demoCompany, setDemoCompany] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [demoMessage, setDemoMessage] = useState('');
  const [demoStatus, setDemoStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [quotation, setQuotation] = useState(true);
  const [productsList, setProduct] = useState([
    {
      type: 'Products',
      list: [
        {
          heading: 'Cryptocurrency Exchange Turnkey',
          description: 'Source Codes Can be Purchased Additionally',
          selected: false,
        },
        {
          heading: 'Crypto Liquidity Solution',
          description: 'Source Codes Can be Purchased Additionally',
          selected: false,
        },
        {
          heading: 'OTC Platform Turnkey',
          description: 'Source Codes Can be Purchased Additionally',
          selected: false,
        },
        {
          heading: 'Mining Pool System',
          description: 'Source Codes Can be Purchased Additionally',
          selected: false,
        },
        {
          heading: 'Staking & Defi Lending Turnkey',
          description: 'Source Codes Can be Purchased Additionally',
          selected: false,
        },
        {
          heading: 'Referral & Affiliate System',
          description: 'Source Codes Can be Purchased Additionally',
          selected: false,
        },
        {
          heading: 'NFT Marketplace',
          description: 'Source Codes Can be Purchased Additionally',
          selected: false,
        },
        {
          heading: 'Decenterlize Exchange',
          description: 'Source Codes Can be Purchased Additionally',
          selected: false,
        },
        {
          heading: 'Crypto Banking Solution',
          description: 'Source Codes Can be Purchased Additionally',
          selected: false,
        },
        {
          heading: 'ICO/IEO/STO',
          description: 'Source Codes Can be Purchased Additionally',
          selected: false,
        },
        // {
        //   heading: 'Leverage and Margin Trading System',
        //   description: 'Source Codes Can be Purchased Additionally',
        //   selected: false,
        // },
        // {
        //   heading: 'Cryptocurrency Staking System',
        //   description: 'Source Codes Can be Purchased Additionally',
        //   selected: false,
        // },
      ],
    },
    // {
    //   type: 'Solutions',
    //   list: [
    //     {
    //       heading: 'White-Label Exchange Solution',
    //       description: 'Source Codes Can be Purchased Additionally',
    //       selected: false,
    //     },
    //     {
    //       heading: 'Cryptocurrency Liquidity Solution',
    //       description: 'Source Codes Can be Purchased Additionally',
    //       selected: false,
    //     },
    //   ],
    // },
  ]);


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

  const handleSnackbar = useCallback(() => {
    setTimeout(() => {
      setTalkStatus('');
      setDemoStatus('');
    }, 3000);
  }, []);

  const handleTab = useCallback((val) => {
    setSelectedTab(val);
  }, []);

  const handleSelectedProduct = (val) => {
    let tempArr = [...productsList];
    tempArr[selectedTab].list[val].selected = !tempArr[selectedTab].list[val]
      .selected;
    setProduct(tempArr);
  };
  let tempData = [];
  const handleQuoteBtn = useCallback(() => {
    // let tempData = productsList[selectedTab].list.filter(
    //   (data) => data.selected === true
    // );
    setQuotation(false);
    productsList[selectedTab].list.map((data) =>
      data.selected ? tempData.push(data.heading) : null
    );
    let formattedQuoteData = `${
      productsList[selectedTab].type
    }: ${tempData.join(', ')}`;
    setDemoMessage(formattedQuoteData);
  }, [selectedTab, productsList]);

  const onChangeHandler = useCallback((e) => {
    if (e.target.name === 'talkName') {
      setTalkName(e.target.value);
    }
    if (e.target.name === 'talkEmail') {
      setTalkEmail(e.target.value);
    }
    if (e.target.name === 'talkPhone') {
      setTalkPhone(e.target.value);
    }
    if (e.target.name === 'talkCompany') {
      setTalkCompany(e.target.value);
    }

    if (e.target.name === 'demoName') {
      setDemoName(e.target.value);
    }
    if (e.target.name === 'demoEmail') {
      setDemoEmail(e.target.value);
    }
    if (e.target.name === 'demoPhone') {
      setDemoPhone(e.target.value);
    }
    if (e.target.name === 'demoCompany') {
      setDemoCompany(e.target.value);
    }
    if (e.target.name === 'demoMessage') {
      setDemoMessage(e.target.value);
    }
  }, []);

  // const talkSubmitHandler = async (e) => {
  //   e.preventDefault();
  //
  //   setLoading(true);
  //   const response = await contactUsApi({
  //     name: talkName,
  //     email: talkEmail,
  //     phone: talkPhone,
  //     company: talkCompany,
  //   });
  //
  //   if (response.status === 201 || response.status === 200) {
  //     setTalkStatus({
  //       type: 'Success',
  //       message: 'Thank You for contacting, We will get back to you ASAP!',
  //     });
  //     setTalkName('');
  //     setTalkEmail('');
  //     setTalkCompany('');
  //     setTalkPhone('');
  //   } else {
  //     setTalkStatus({
  //       type: 'Error',
  //       message: 'Oops! Something went wrong, Please try again.',
  //     });
  //   }
  //   handleSnackbar();
  //   setLoading(false);
  // };

  // const demoSubmitHandler = async (e) => {
  //   e.preventDefault();
  //
  //   setLoading(true);
  //   const response = await contactUsApi({
  //     name: demoName,
  //     email: demoEmail,
  //     phone: demoPhone,
  //     company: demoCompany,
  //     message: demoMessage,
  //   });
  //
  //   if (response.status === 201 || response.status === 200) {
  //     setDemoStatus({
  //       type: 'Success',
  //       message: 'Thank You for contacting, We will get back to you ASAP!',
  //     });
  //     setDemoName('');
  //     setDemoEmail('');
  //     setDemoCompany('');
  //     setDemoPhone('');
  //     setDemoMessage('');
  //   } else {
  //     setDemoStatus({
  //       type: 'Error',
  //       message: 'Oops! Something went wrong, Please try again.',
  //     });
  //   }
  //   handleSnackbar();
  //   setLoading(false);
  // };

console.log('DATA',demoMessage);
  return (
      <>
        {quotation ?
    <QuotationComponent
      fixedTop={scrollPosition > 300}
      handleTab={handleTab}
      selectedTab={selectedTab}
      productsList={productsList}
      message={demoMessage}
      handleQuoteBtn={handleQuoteBtn}
      handleSelectedProduct={handleSelectedProduct}
      onChangeHandler={onChangeHandler}
      // talkSubmitHandler={talkSubmitHandler}
      // demoSubmitHandler={demoSubmitHandler}
      talkName={talkName}
      talkEmail={talkEmail}
      talkPhone={talkPhone}
      talkCompany={talkCompany}
      demoName={demoName}
      demoEmail={demoEmail}
      demoPhone={demoPhone}
      demoCompany={demoCompany}
      loading={loading}
      talkStatus={talkStatus}
      demoStatus={demoStatus}
    /> :
    <Getaquote message={demoMessage} />}
      </>
  );
};

export default Quotation;
