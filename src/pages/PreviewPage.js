import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PreviewPage = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <PreviewContainer>
      <h1>Property Preview</h1>
      <DetailGroup>
        <strong>Property For:</strong> {state.propertyFor}
      </DetailGroup>
      <DetailGroup>
        <strong>Property Type:</strong> {state.propertyType}
      </DetailGroup>
      <DetailGroup>
        <strong>Bedrooms:</strong> {state.bedrooms}
      </DetailGroup>
      <DetailGroup>
        <strong>Square Footage:</strong> {state.squareFootage}
      </DetailGroup>
      <DetailGroup>
        <strong>Address:</strong> {state.address}
      </DetailGroup>
      <DetailGroup>
        <strong>Price:</strong> {state.price}
      </DetailGroup>
      <DetailGroup>
        <strong>Deposit:</strong> {state.deposit}
      </DetailGroup>
      <DetailGroup>
        <strong>Features:</strong> {state.features.join(', ')}
      </DetailGroup>
      <DetailGroup>
        <strong>Amenities:</strong> {state.amenities.join(', ')}
      </DetailGroup>
      <PhotosContainer>
        {Array.from(state.photos).map((file, index) => (
          <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} key={index} />
        ))}
      </PhotosContainer>
    </PreviewContainer>
  );
};

const PreviewContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family:gilroy;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const DetailGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export default PreviewPage;
