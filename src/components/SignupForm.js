// src/components/SignupForm.js
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Modal from 'react-modal'
// import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const SignupForm = () => {
//   const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextPage = () => {
    setPageIndex((prev) => prev + 1);
  };

  const prevPage = () => {
    setPageIndex((prev) => prev - 1);
  };

  return (
    <FormContainer>
      <h2>Let's get you started!</h2>
      <Formik
        initialValues={{
          role: '',
          name: '',
          country: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object({
          role: Yup.string().required('Required'),
          name: Yup.string().required('Required'),
          country: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          openModal();
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            {pageIndex === 0 && (
              <>
                <FieldGroup>
                    <label >I am</label>
                  <label>
                    <Field name="role" type="radio" value="owner" />
                    Owner
                  </label>
                  <label>
                    <Field name="role" type="radio" value="builder" />
                    Builder
                  </label>
                </FieldGroup>
                <FieldGroup>
                  <label htmlFor="name">Name</label>
                  <Field name="name" type="text" />
                </FieldGroup>
                <FieldGroup>
                  <label htmlFor="country">Country</label>
                  <Field name="country" type="text" />
                </FieldGroup>
              </>
            )}
            {pageIndex === 1 && (
              <>
                <FieldGroup>
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" />
                </FieldGroup>
                <FieldGroup>
                  <label htmlFor="password">Password</label>
                  <Field name="password" type="password" />
                </FieldGroup>
                <FieldGroup>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field name="confirmPassword" type="password" />
                </FieldGroup>
              </>
            )}
            <ButtonGroup>
              {pageIndex > 0 && <Button type="button" onClick={prevPage}>Previous</Button>}
              {pageIndex < 1 && <Button type="button" onClick={nextPage}>Next</Button>}
              {pageIndex === 1 && <SubmitButton type="submit" disabled={isSubmitting}>Sign Up</SubmitButton>}
            </ButtonGroup>
          </StyledForm>
        )}
      </Formik>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Registration Success"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Thank you for registering!</h2>
        <p>We will contact you soon.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
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

const SubmitButton = styled(Button)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

export default SignupForm;
