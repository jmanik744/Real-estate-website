import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PropertyForm from './components/PropertyForm';
import PreviewPage from './pages/PreviewPage';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/property-form" element={<PropertyForm />} />
      <Route path="/preview" element={<PreviewPage />} />
    </Routes>
  </Router>
);

export default App;
