import React, { ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.backgroundOverlay}>
        <div className={styles.contentWrapper}>
          {children}
        </div>
      </div>
    </div>
  );
}; 

export default Layout;