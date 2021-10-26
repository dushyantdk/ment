import React from 'react';
import {
  Container,
  Wrapper,
  FormContainer,
  TopContainer,
  BottomContainer,
  Button,
} from './styles/SendMessage';
import Snackbar from '../snackbar';

const SendMessage = ({
  message,
  onChangeHandler,
  submitHandler,
  name,
  email,
  phone,
  company,
  loading,
  status,
}) => {
  return (
    <Container id="WhiteLabel-Request-Demo">
      <Wrapper>
        <p>MENT TECH</p>
        <h3>Speak to our expert</h3>
        <FormContainer>
          <form onSubmit={submitHandler}>
            <div>
              <TopContainer>
                <input
                  type="text"
                  required={true}
                  placeholder="Your Name"
                  name="name"
                  value={name}
                  onChange={(e) => onChangeHandler(e)}
                />
                <input
                  type="email"
                  required={true}
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => onChangeHandler(e)}
                />
              </TopContainer>
              <TopContainer>
                <input
                  type="number"
                  required={true}
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => onChangeHandler(e)}
                />
                <input
                  type="text"
                  required={true}
                  placeholder="Company"
                  name="company"
                  value={company}
                  onChange={(e) => onChangeHandler(e)}
                />
              </TopContainer>
            </div>
            <BottomContainer>
              <textarea
                required={true}
                placeholder="Message"
                value={message}
                name="message"
                data-gramm="false"
                onChange={(e) => onChangeHandler(e)}
              />
            </BottomContainer>
            <Button
              color="#10223A"
              fontColor="#fff"
              disabled={loading}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </FormContainer>
      </Wrapper>
      <Snackbar
        open={status && status.type}
        message={status && status.message}
        color={status && status.type === 'Success' ? '#4caf50' : '#f44336'}
      />
    </Container>
  );
};

export default SendMessage;
