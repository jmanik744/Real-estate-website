import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useNavigate,} from 'react-router-dom';

const PropertyForm = () => {
  const navigate = useNavigate();

  return (
    <FormContainer>
      <h1>Property Listing Form</h1>
      <Formik
        initialValues={{
          propertyFor: '',
          propertyType: '',
          bedrooms: '',
          squareFootage: '',
          address: '',
          price: '',
          deposit: '',
          photos: [],
          features: [],
          amenities: [],
        }}
        validationSchema={Yup.object({
          propertyFor: Yup.string().required('Required'),
          propertyType: Yup.string().required('Required'),
          bedrooms: Yup.number().required('Required'),
          squareFootage: Yup.number().required('Required'),
          address: Yup.string().required('Required'),
          price: Yup.number().required('Required'),
          deposit: Yup.number().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          navigate('/preview', { state: values });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <StyledForm>
            <FieldGroup>
              <label>Property For</label>
              <Field name="propertyFor" as="select">
                <option value="">Select</option>
                <option value="rent">Rent</option>
                <option value="sale">Sale</option>
              </Field>
            </FieldGroup>
            <FieldGroup>
              <label>Property Type</label>
              <Field name="propertyType" as="select">
                <option value="">Select</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
              </Field>
            </FieldGroup>
            <FieldGroup>
              <label>Bedrooms</label>
              <Field name="bedrooms" type="number" />
            </FieldGroup>
            <FieldGroup>
              <label>Square Footage</label>
              <Field name="squareFootage" type="number" />
            </FieldGroup>
            <FieldGroup>
              <label>Address</label>
              <Field name="address" type="text" />
            </FieldGroup>
            <FieldGroup>
              <label>Price</label>
              <Field name="price" type="number" />
            </FieldGroup>
            <FieldGroup>
              <label>Deposit</label>
              <Field name="deposit" type="number" />
            </FieldGroup>
            <FieldGroup>
              <label>Photos</label>
              <input
                name="photos"
                type="file"
                multiple
                onChange={(event) => {
                  setFieldValue("photos", event.currentTarget.files);
                }}
              />
            </FieldGroup>
            <FieldGroup>
              <label>Features</label>
              <Field name="features" as="select" multiple>
                <option value="furnishing">Furnishing Status</option>
                <option value="nonveg">Non-Veg Allowed</option>
              </Field>
            </FieldGroup>
            <FieldGroup>
              <label>Amenities</label>
              <Field name="amenities" as="select" multiple>
                <option value="pool">Swimming Pool</option>
                <option value="gym">Gym</option>
              </Field>
            </FieldGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Submit
            </SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  font-family:gilroy;
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

  input,
  select {
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

export default PropertyForm;
