import React from 'react';
import styles from './TicketCard.module.css';

interface TicketCardProps {
  name: string;
  email: string;
  githubUsername: string;
  avatarSrc?: string;
  eventDate: string;
  eventLocation: string;
  ticketNumber: string;
}

const TicketCard: React.FC<TicketCardProps> = ({
  name,
  email,
  githubUsername,
  avatarSrc,
  eventDate,
  eventLocation,
  ticketNumber
}) => {
  return (
    <div className={styles.ticketCard}>
      <div className={styles.ticketHeader}>
        <img 
          src="/coding-conf-logo.svg" 
          alt="Coding Conf Logo" 
          className={styles.logo} 
        />
        <span className={styles.eventInfo}>
          {eventDate} | {eventLocation}
        </span>
      </div>
      
      <div className={styles.ticketContent}>
        <div className={styles.avatarSection}>
          {avatarSrc ? (
            <img 
              src={avatarSrc} 
              alt={`${name}'s avatar`} 
              className={styles.avatar} 
            />
          ) : (
            <div className={styles.avatarPlaceholder} />
          )}
          <div className={styles.userInfo}>
            <span className={styles.userName}>{name}</span>
            <span className={styles.userHandle}>@{githubUsername}</span>
          </div>
        </div>
        
        <div className={styles.ticketNumber}>
          #{ticketNumber}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;