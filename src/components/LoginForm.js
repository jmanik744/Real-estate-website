// src/components/LoginForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const LoginForm = () => {
  return (
    <FormContainer>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <FieldGroup>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
            </FieldGroup>
            <FieldGroup>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
            </FieldGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Login
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family:gilroy;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const FieldGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default LoginForm;
