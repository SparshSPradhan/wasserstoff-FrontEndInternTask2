

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Avatar from '../components/Avatar/Avatar';
import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import { validateRegistration } from '../utils/validation';

interface RegistrationData {
  avatar: File | null;
  fullName: string;
  email: string;
  githubUsername: string;
}

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    avatar: null,
    fullName: '',
    email: '',
    githubUsername: ''
  });

  const [errors, setErrors] = useState<Partial<RegistrationData>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    field: keyof RegistrationData
  ) => {
    setRegistrationData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleAvatarSelect = (file: File) => {
    setRegistrationData(prev => ({
      ...prev,
      avatar: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateRegistration(registrationData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Store registration data in localStorage
    localStorage.setItem('registrationData', JSON.stringify({
      ...registrationData,
      avatarSrc: registrationData.avatar 
        ? URL.createObjectURL(registrationData.avatar) 
        : undefined
    }));

    // Navigate to confirmation page
    navigate('/confirmation');
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p>Secure your spot at next year's biggest coding conference.</p>
        
        <Avatar onFileSelect={handleAvatarSelect} />
        
        <InputField 
          placeholder="Full Name"
          value={registrationData.fullName}
          onChange={(e) => handleInputChange(e, 'fullName')}
          error={errors.fullName}
        />
        
        <InputField 
          placeholder="example@email.com"
          value={registrationData.email}
          onChange={(e) => handleInputChange(e, 'email')}
          error={errors.email}
        />
        
        <InputField 
          placeholder="@yourusername"
          value={registrationData.githubUsername}
          onChange={(e) => handleInputChange(e, 'githubUsername')}
          error={errors.githubUsername}
        />
        
        <Button 
          type="submit" 
          fullWidth
        >
          Generate My Ticket
        </Button>
      </form>
    </Layout>
  );
};

export default RegistrationPage;