import React from 'react';
import styles from '../styles/BackgroundAnimation.module.css';

const BackgroundAnimation: React.FC = () => (
  <div className={styles.bubbles}>
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className={styles.bubble} />
    ))}
  </div>
);

export default BackgroundAnimation;