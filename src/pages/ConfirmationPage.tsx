
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import TicketCard from '../components/TicketCard/TicketCard';
import Button from '../components/Button/Button';

interface RegistrationData {
  fullName: string;
  email: string;
  githubUsername: string;
  avatarSrc?: string;
}

const ConfirmationPage: React.FC = () => {
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    fullName: 'Jonatan Kristof',
    email: 'jonatan@email.com',
    githubUsername: 'jonatankristof0101'
  });

  useEffect(() => {
    // Retrieve registration data from localStorage
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setRegistrationData(parsedData);
    }
  }, []);

  const handleDownloadTicket = () => {
    // Placeholder for ticket download functionality
    alert('Ticket download functionality to be implemented');
  };

  return (
    <Layout>
      <div>
        <h1>Congrats, {registrationData.fullName}!</h1>
        <p>Your ticket is ready.</p>
        <p>We've emailed your ticket to {registrationData.email} and will send updates in the run up to the event.</p>
        
        <TicketCard 
          name={registrationData.fullName}
          email={registrationData.email}
          githubUsername={registrationData.githubUsername}
          avatarSrc={registrationData.avatarSrc}
          eventDate="Jan 31, 2025"
          eventLocation="Austin, TX"
          ticketNumber="1669"
        />
        
        <div style={{ marginTop: '20px' }}>
          <Button 
            fullWidth 
            onClick={handleDownloadTicket}
          >
            Download Ticket
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ConfirmationPage;